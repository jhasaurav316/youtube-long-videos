/**
 * YouTube OAuth2 Setup
 *
 * Prerequisites:
 *   1. Go to https://console.cloud.google.com/
 *   2. Create a project (or select existing)
 *   3. Enable "YouTube Data API v3"
 *   4. Go to Credentials → Create OAuth 2.0 Client ID (Desktop app)
 *   5. Download the JSON and save as "client_secret.json" in this folder
 *
 * Run: node auth.js
 * This opens a browser for Google login and saves the token locally.
 */

import { google } from 'googleapis';
import http from 'http';
import open from 'open';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CLIENT_SECRET_PATH = path.join(__dirname, 'client_secret.json');
const TOKEN_PATH = path.join(__dirname, 'token.json');

const SCOPES = [
  'https://www.googleapis.com/auth/youtube.upload',
  'https://www.googleapis.com/auth/youtube',
];

async function authenticate() {
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error('\n❌ client_secret.json not found!');
    console.error('\nSetup steps:');
    console.error('  1. Go to https://console.cloud.google.com/');
    console.error('  2. Create/select a project');
    console.error('  3. Enable "YouTube Data API v3"');
    console.error('  4. Credentials → Create OAuth 2.0 Client ID (Desktop app)');
    console.error('  5. Download JSON → save as client_secret.json in this folder\n');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, 'utf-8'));
  const { client_id, client_secret } = credentials.installed || credentials.web;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    'http://localhost:3333/callback'
  );

  // Check if we already have a valid token
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
    oauth2Client.setCredentials(token);

    // Test if token still works
    try {
      const youtube = google.youtube({ version: 'v3', auth: oauth2Client });
      await youtube.channels.list({ part: 'snippet', mine: true });
      console.log('✅ Already authenticated! Token is valid.');
      return oauth2Client;
    } catch {
      console.log('⚠️  Token expired, re-authenticating...');
    }
  }

  // Start local server to receive the OAuth callback
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });

  console.log('\n🔑 Opening browser for Google authentication...\n');

  const code = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost:3333');
      if (url.pathname === '/callback') {
        const code = url.searchParams.get('code');
        if (code) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('<h2>✅ Authentication successful! You can close this tab.</h2>');
          server.close();
          resolve(code);
        } else {
          res.writeHead(400, { 'Content-Type': 'text/html' });
          res.end('<h2>❌ Authentication failed.</h2>');
          server.close();
          reject(new Error('No code received'));
        }
      }
    });

    server.listen(3333, () => {
      // Try to open the browser, fall back to manual URL
      import('open').then(m => m.default(authUrl)).catch(() => {
        console.log('Could not open browser automatically.');
        console.log('Please open this URL manually:\n');
        console.log(authUrl);
      });
    });
  });

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log('\n✅ Authentication successful! Token saved to token.json');

  return oauth2Client;
}

// Export for use by upload script
export async function getAuthClient() {
  if (!fs.existsSync(CLIENT_SECRET_PATH)) {
    console.error('❌ Run "node auth.js" first to set up authentication.');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CLIENT_SECRET_PATH, 'utf-8'));
  const { client_id, client_secret } = credentials.installed || credentials.web;

  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    'http://localhost:3333/callback'
  );

  if (!fs.existsSync(TOKEN_PATH)) {
    console.error('❌ No token found. Run "node auth.js" first.');
    process.exit(1);
  }

  const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
  oauth2Client.setCredentials(token);

  // Auto-refresh if expired
  oauth2Client.on('tokens', (newTokens) => {
    const updated = { ...token, ...newTokens };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(updated, null, 2));
  });

  return oauth2Client;
}

// Run directly
authenticate().catch(console.error);
