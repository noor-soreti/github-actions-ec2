const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! This server is running on Node.js with Express.');
});

app.get('/info', (req, res) => {
  res.json({
    message: 'Simple Web Server'
    // version: '1.0.0',
    // uptime: process.uptime()
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});