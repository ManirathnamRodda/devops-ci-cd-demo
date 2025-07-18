// Simple Node.js app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`🚀 Hello from DevOps CI/CD Demo App! Welcome Mani to the Devops worlds`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
