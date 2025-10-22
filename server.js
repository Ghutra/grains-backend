const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/alliya', require('./routes/alliya'));
app.use('/api/shop', require('./routes/shop'));
app.use('/api/bookings', require('./routes/booking'));
app.use('/api/market', require('./routes/marketPulse'));

app.listen(PORT, () => {
  console.log(`Grains Hub backend running on port ${PORT}`);
});



