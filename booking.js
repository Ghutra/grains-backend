const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../api/bookings.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading bookings.json:', err);
      return res.status(500).json({ error: 'Failed to load bookings' });
    }
    try {
      const bookings = JSON.parse(data);
      res.json(bookings);
    } catch (parseErr) {
      console.error('Error parsing bookings.json:', parseErr);
      res.status(500).json({ error: 'Invalid JSON format' });
    }
  });
});

module.exports = router;

