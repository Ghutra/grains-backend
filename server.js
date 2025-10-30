// 1. Import modules
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 2. Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve frontend 
if needed

// 3. Route: Alliya from root
app.use('/api/alliya', require('./alliya')); // 👈 this now calls 
root-level alliya.js

// 4. Optional: other routes
// app.use('/api/shop', require('./routes/shop'));
// app.use('/api/booking', require('./routes/booking'));

// 5. Start server
app.listen(PORT, () => {
  console.log(`Grains Hub backend running on port ${PORT}`);
});

