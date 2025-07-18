// Simple Node.js app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send(`🚀 Hello from DevOps CI/CD Demo App! Welcome to my world`);
});


=======
  res.send('🚀 Hello from DevOps CI/CD Demo App! Welocme to my world');
>>>>>>> 8c0c7d7 (code changes completed)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
