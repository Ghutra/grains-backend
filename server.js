const express = require('express');
const cors = require('cors');
const alliyaRouter = require('./alliya');

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Grains Backend is running.');
});

// Delegate /api/alliya to alliya.js
app.use('/api/alliya', alliyaRouter);

// Start server
const PORT = process.env.PORT || 3000;
console.log('Alliya backend initialized. Awaiting queries...');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
