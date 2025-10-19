const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/verify-supplier', (req, res) => {
  res.json({ verified: true, supplier: 'Mai Noor Grains' });
});

app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`);
});
const express 
= 
require('express'); 
const app = express(); const PORT = 
process.env.PORT || 3000; app.get('/api/verify-supplier', (req, res) => { res.json({ verified: true, supplier: 'Al Noor Grains' }); }); app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
app.get('/verify-supplier', (req, res) => {
  res.redirect('/api/verify-supplier');
});
