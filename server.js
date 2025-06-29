// Import the express library
const express = require('express');

// Create an Express application
const app = express();

// ====== Middleware Example ======
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware/route handler
});

// ====== Route 1 ======
app.get('/', (req, res) => {
  res.send('Hello, Welcome to Celebal Technologies!! (Route1)');
});

// ====== Route 2 ======
app.get('/about', (req, res) => {
  res.send('This is the About page.(Route 2)');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Server running on http://localhost:${PORT}/about`);
});
