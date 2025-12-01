// Simple Node.js proxy server for Gemini API
// This keeps the API key secret on the server side

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load API key from .env file
let GEMINI_API_KEY = null;
try {
  const envContent = fs.readFileSync('.env', 'utf8');
  const match = envContent.match(/GEMINI_API_KEY=(.+)/);
  if (match) {
    GEMINI_API_KEY = match[1].trim();
  }
} catch (err) {
  console.error('Error loading .env file:', err.message);
  process.exit(1);
}

if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY not found in .env file');
  process.exit(1);
}

const PORT = 8000;

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.md': 'text/markdown',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // API proxy endpoint
  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const { message, context } = JSON.parse(body);
        console.log(`📨 AI Chat Request: "${message.substring(0, 50)}..."`);
        console.log(`📍 Current Lab: ${context.currentLab || 'None'}`);

        // Map lab IDs to learning objectives
        const labObjectives = {
          'week-1-lab-a': 'implementing design tokens (colors, spacing, typography, radii) and understanding token-first CSS architecture',
          'week-1-lab-b': 'creating premium cards with stacked box-shadows, concentric border radii, gradient borders, hover states, and focus-visible accessibility',
          'week-2-lab-a': 'building responsive Bento grid layouts with CSS Grid, proper breakpoints (680px/980px), and semantic HTML',
          'week-2-lab-b': 'designing two-column dashboard panels with fixed/flexible columns, severity badges, and accessible navigation',
          'week-3-lab-a': 'implementing accessible interactive states (:hover, :focus-visible, :active) with proper timing and reduced motion support',
          'week-3-lab-b': 'creating non-JavaScript toggles using details/summary and checkbox/label patterns for progressive enhancement',
          'week-4-lab-a': 'animating blur reveal hero sections with SVG masks, blur filters, and choreographed keyframe animations',
          'week-4-capstone': 'achieving ±1px fidelity across 768px and 1200px breakpoints with pixel-perfect precision'
        };

        const currentObjective = labObjectives[context.currentLab] || 'learning design engineering fundamentals';

        // Enhanced system prompt - AI as design engineering coach
        const systemPrompt = `You are a world-class design engineering coach teaching a 4-week HTML/CSS/SVG course. You're like a combination of Rauno Freiberg, Jhey Tompkins, and Adam Wathan - you teach pixel-perfect implementation with tasteful motion.

## YOUR TEACHING PHILOSOPHY
- Precision matters: ±1px fidelity is the goal
- Tokens over hard-coded values (always)
- Semantic HTML over div soup
- Accessibility is non-negotiable (focus-visible, prefers-reduced-motion, contrast)
- Motion should be tasteful (160-320ms, cubic-bezier easing, subtle delays)
- Show, don't just tell (give code examples)

## CURRENT CONTEXT
**Lab:** ${context.currentLab || 'No lab selected yet'}
**Learning Goal:** ${currentObjective}

**Learner's HTML Code:**
\`\`\`html
${context.htmlCode || '(empty - they haven\'t written anything yet)'}
\`\`\`

**Learner's CSS Code:**
\`\`\`css
${context.cssCode || '(empty - they haven\'t written anything yet)'}
\`\`\`

**Available Video Resources:**
${context.videos || 'No videos loaded'}

## YOUR ROLE AS COACH

### 1. LINEAR TEACHING (Track Progress)
- **If they just started a lab:** Welcome them, explain the goal, give them the first step
- **If they have partial code:** Review what they've done, celebrate wins, guide next step
- **If they're stuck:** Debug their code, show the fix, explain why
- **If they completed the lab:** Validate their work, suggest improvements, transition to next lab

### 2. CODE REVIEW (When they ask or show code)
Analyze their code and provide:
- ✅ What they did RIGHT (be specific!)
- ❌ What's MISSING or WRONG (be gentle but direct)
- 💡 What to DO NEXT (actionable step)
- 🎬 VIDEO REFERENCE if relevant (e.g., "Watch Layout Land at 3:00 for grid template areas")

### 3. ANSWER QUESTIONS (Concept explanations)
- Give concise explanations (2-3 paragraphs max)
- Include code examples when helpful
- Reference videos with timestamps when relevant
- Connect to the current lab's objectives

### 4. TRACK LEARNING PROGRESS
- Remember what they've completed (infer from their code quality)
- Scaffold difficulty (don't overwhelm beginners)
- Celebrate incremental wins ("Nice work on those tokens!")
- Push them toward pixel-perfection ("Let's check that spacing - should be exactly 24px")

## RESPONSE STYLE
- Be encouraging but precise
- Use emojis sparingly (✅❌💡🎬 for clarity)
- Format code with \`\`\`css or \`\`\`html blocks
- Keep responses focused (don't ramble)
- End with a clear next action

## VIDEO LINKING FORMAT
When referencing videos, format like this:
"Watch **Layout Land** at **3:00** to see grid template areas in action"
"Check out **Cassie Evans - SVG Animation** at **3:40** for mask techniques"

## COMMON LAB CHECKPOINTS

**Week 1 Lab 1A:**
Step 1: Define color tokens → Step 2: Add spacing scale → Step 3: Type scale → Step 4: Radii → Step 5: Apply to body

**Week 1 Lab 1B:**
Step 1: Shadow tokens → Step 2: Card markup → Step 3: Stacked shadows → Step 4: Gradient glow → Step 5: Hover/focus states → Step 6: Reduced motion

Act as their personal coach - meet them where they are, guide them forward, and help them build confidence + skill.`;

        console.log(`🤖 Calling Gemini API...`);

        // Call Gemini API using https module
        const postData = JSON.stringify({
          contents: [
            {
              parts: [
                { text: systemPrompt },
                { text: `User question: ${message}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          }
        });

        const options = {
          hostname: 'generativelanguage.googleapis.com',
          port: 443,
          path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
          }
        };

        const apiReq = https.request(options, (apiRes) => {
          let data = '';

          apiRes.on('data', (chunk) => {
            data += chunk;
          });

          apiRes.on('end', () => {
            try {
              console.log(`✅ Gemini API Response Status: ${apiRes.statusCode}`);
              const parsed = JSON.parse(data);

              if (parsed.error) {
                console.error(`❌ Gemini API Error:`, parsed.error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: parsed.error.message || 'Gemini API error' }));
                return;
              }

              const aiResponse = parsed.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
              console.log(`💬 AI Response: ${aiResponse.substring(0, 100)}...`);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ response: aiResponse }));
            } catch (err) {
              console.error(`❌ Parse Error:`, err.message);
              console.error(`Raw data:`, data.substring(0, 200));
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to parse Gemini response' }));
            }
          });
        });

        apiReq.on('error', (error) => {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: error.message }));
        });

        apiReq.write(postData);
        apiReq.end();

      } catch (error) {
        console.error('API Error:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
    return;
  }

  // Static file serving
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
  console.log(`✅ Gemini API proxy active at /api/chat`);
  console.log(`✅ API key loaded from .env (not exposed to client)`);
});
