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

