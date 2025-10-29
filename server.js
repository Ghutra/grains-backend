const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend (optional)
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Correct route imports

app.use('/api/alliya', require('./routes/alliya'));
app.use('/api/shop', require('./routes/shop'));
app.use('/api/booking', require('./routes/booking'));

app.listen(PORT, () => {
  console.log(`Grains Hub backend running on port ${PORT}`);
});

