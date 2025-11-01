// 1. Import modules
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Middleware
app.use(cors()); // ✅ Enable cross-origin support
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve frontend if needed

// 3. Route: Alliya from root
app.use('/api/alliya', require('./alliya')); // ✅ Clean and correct

// 4. Optional: other routes
// app.use('/api/shop', require('./routes/shop'));
// app.use('/api/booking', require('./routes/booking'));

// 5. Root route (optional, to avoid "Cannot GET /")
app.get('/', (req, res) => {
  res.send('Grains Hub backend is live. Try /api/alliya?q=irri 6 broken 5');
});

// 6. Start server
app.listen(PORT, () => {
  console.log(`Grains Hub backend running on port ${PORT}`);
});

