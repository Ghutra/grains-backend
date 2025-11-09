// alliya.js
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // Install: npm install node-fetch@2

// Load stock.json from your site (GitHub Pages)
const STOCK_URL = 'https://grains.ae/assets/data/stock.json';

// In-memory cache (refresh every 60s)
let cachedStock = [];
let lastFetch = 0;

async function getStock() {
  const now = Date.now();
  if (now - lastFetch > 60000 || cachedStock.length === 0) {
    try {
      const res = await fetch(STOCK_URL);
      if (res.ok) {
        cachedStock = await res.json();
        lastFetch = now;
        console.log('Stock refreshed:', cachedStock.length, 'items');
      }
    } catch (err) {
      console.error('Stock fetch failed:', err.message);
    }
  }
  return cachedStock;
}

// Static knowledge base
const knowledge = [
  {
    keywords: ['compliance', 'scan', 'trust', 'verified', 'cisco', 'norton'],
    reply: 'Grains Hub is verified by Cisco Talos, Norton, Sucuri. SPF/DKIM/DMARC configured. Scan logs on request.'
  },
  {
    keywords: ['fcl', 'booking', 'container', '20ft', '40ft'],
    reply: 'FCL bookings open: India, Pakistan, Thailand. 20ft/40ft. Compliance-checked. <a href="https://wa.me/971585521976?text=FCL Inquiry from Grains Hub">Book via WhatsApp</a>.'
  },
  {
    keywords: ['services', 'service', 'what do you do'],
    reply: 'We offer: Grain verification, FCL logistics, compliance audits, real-time Pulse. Dubai to global.'
  },
  {
    keywords: ['founder', 'shahid', 'who'],
    reply: 'Founder: Shahid Bashir. Philosophy: Serve specialists with restraint. Trust earned, not marketed.'
  },
  {
    keywords: ['pulse', 'price', 'market'],
    reply: 'Live prices every 60s. Basmati 1121: AED 160/kg. Irri 6: AED 60/kg. <a href="/pulse">View Pulse</a>'
  }
];

// Main Alliya route
router.get('/', async (req, res) => {
  const query = (req.query.q || '').toLowerCase().trim();
  if (!query) {
    return res.json({ reply: 'Ask me about grains, FCL, compliance...' });
  }

  const stock = await getStock();

  // 1. Try stock match
  const stockMatch = stock.find(item =>
    item.name.toLowerCase().includes(query) ||
    item.origin.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  );

  if (stockMatch) {
    const msg = `${stockMatch.name} from ${stockMatch.origin}: ${stockMatch.price} (${stockMatch.stock} available). <a href="https://wa.me/971585521976?text=Inquiry: 
${encodeURIComponent(stockMatch.name)}">Book via WhatsApp</a>`;
    return res.json({ reply: msg });
  }

  // 2. Try knowledge base
  const kbMatch = knowledge.find(k => k.keywords.some(kw => query.includes(kw)));
  if (kbMatch) {
    return res.json({ reply: kbMatch.reply });
  }

  // 3. Fallback
  res.json({
    reply: `I couldn't find "${query}". Try: "1121 rice", "FCL booking", "compliance". <br><a href="https://wa.me/971585521976?text=${encodeURIComponent(query)}">Ask on WhatsApp</a>`
  });
});

module.exports = router;
