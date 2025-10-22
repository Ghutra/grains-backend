const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Verified supplier route
app.get('/api/verify-supplier', (req, res) => {
  res.json({ verified: true, supplier: 'Al Noor Grains' });
});

// ✅ Optional root message
app.get('/', (req, res) => {
  res.send('Grains Backend is live. Alliya is listening.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/stock', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'stock.json'));
});

app.get('/api/bookings', (req, res) => {
  res.sendFile(path.join(__dirname, 'api', 'bookings.json'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

