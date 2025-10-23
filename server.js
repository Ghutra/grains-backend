const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// ✅ Only include existing route files
app.use('/api/alliya', require('./routes/alliya'));
app.use('/api/shop', require('./routes/shop'));
app.use('/api/bookings', require('./routes/bookings'));

app.listen(PORT, () => {
  console.log(`Grains Hub backend running on port ${PORT}`);
});

