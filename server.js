import express from 'express';
import { spawn } from 'child_process';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('GTG Dashboard backend is running.');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Launch the scheduler
spawn('node', ['scheduler.cjs'], { stdio: 'inherit' });
