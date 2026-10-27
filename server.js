const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/ld+json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split('?')[0]);
  // Match the production clean URLs used by navigation and canonical metadata.
  if (['/about', '/skills', '/projects', '/contact'].includes(reqPath)) reqPath += '.html';
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(__dirname, reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Backend headers optimized for Googlebot, Answer Engines, and Crawlers
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      'Link': '</llms.txt>; rel="alternate"; type="text/plain", </llms-full.txt>; rel="alternate"; type="text/plain", </schema.json>; rel="alternate"; type="application/ld+json"',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin'
    };

    if (ext === '.txt' || ext === '.json' || ext === '.xml') {
      headers['Cache-Control'] = 'public, max-age=3600, stale-while-revalidate=86400';
    } else if (ext === '.png' || ext === '.jpg' || ext === '.svg' || ext === '.ico') {
      headers['Cache-Control'] = 'public, max-age=86400, immutable';
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n===========================================`);
    console.log(`  Portfolio running at: http://localhost:${port}/`);
    console.log(`===========================================\n`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use (the site might already be running!). Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
