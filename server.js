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

        // Build system prompt with context
        const systemPrompt = `You are an expert design engineering tutor teaching HTML/CSS/SVG. You help learners build pixel-perfect components.

Current Lab: ${context.currentLab || 'None selected'}
Learner's HTML Code:
\`\`\`html
${context.htmlCode || ''}
\`\`\`

Learner's CSS Code:
\`\`\`css
${context.cssCode || ''}
\`\`\`

Available Video Resources:
${context.videos || ''}

Your role:
- Answer questions about the current lab
- Review their code and suggest improvements
- Link to video timestamps when relevant (format: "Watch [Video Name] at X:XX")
- Teach best practices (tokens, accessibility, semantic HTML)
- Be encouraging and specific

Keep responses concise (2-3 paragraphs max). Use markdown for code snippets.`;

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
              const parsed = JSON.parse(data);
              const aiResponse = parsed.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ response: aiResponse }));
            } catch (err) {
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
