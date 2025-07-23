import express from 'express';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Resolve __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the HTML file directly from the root directory
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'gtgdash.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Launch the scheduler script
spawn('node', ['scheduler.mjs'], { stdio: 'inherit' });

