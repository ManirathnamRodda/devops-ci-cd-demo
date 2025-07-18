// Simple Node.js app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 Hello from DevOps CI/CD Demo App!</h1>
    <p>Welcome to my world</p>
  `);
});

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
