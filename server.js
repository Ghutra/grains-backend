const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // npm install node-fetch@2

const app = express();
app.use(cors());
app.use(express.json());

const STOCK_URL = 'https://grains.ae/assets/data/stock.json';

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

app.get('/api/alliya', async (req, res) => {
  const query = (req.query.q || '').toLowerCase().trim();
  if (!query) {
    return res.json({ reply: 'Ask me about grains, FCL, compliance...' });
  }

  const stock = await getStock();
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' });

  const stockMatch = stock.find(item =>
    item.name.toLowerCase().includes(query) ||
    item.origin.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  );

  if (stockMatch) {
    const msg = `${stockMatch.name} from ${stockMatch.origin}: ${stockMatch.price} (${stockMatch.stock} available). <a href="https://wa.me/971585521976?text=Inquiry: ${encodeURIComponent(stockMatch.name)}">Book via WhatsApp</a><br><small>Verified: ${timestamp}</small>`;
    return res.json({ reply: msg });
  }

  const kbMatch = knowledge.find(k => k.keywords.some(kw => query.includes(kw)));
  if (kbMatch) {
    return res.json({ reply: kbMatch.reply });
  }

  console.log('Fallback query:', query);
  res.json({
    reply: `I couldn't find "${query}". Try: "1121 rice", "FCL booking", "compliance". <br><a href="https://wa.me/971585521976?text=${encodeURIComponent(query)}">Ask on WhatsApp</a>`
  });
});

const PORT = process.env.PORT || 3000;
console.log('Alliya backend initialized. Awaiting queries...');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
