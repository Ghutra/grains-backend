
app.get('/verify-supplier', (req, res) => {
  res.redirect(301, '/api/verify-supplier');
});
const express 
= 
require('express'); 
const app = express(); const PORT = 
process.env.PORT || 3000; app.get('/api/verify-supplier', (req, res) => { res.json({ verified: true, supplier: 'Al Noor Grains' }); }); app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
app.get('/verify-supplier', (req, res) => {
  res.redirect('/api/verify-supplier');
});
