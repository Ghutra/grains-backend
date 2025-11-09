// alliya.js — FINAL VERSION FOR RENDER
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch'); // ← THIS LINE IS KEY

// === YOUR DATABASE ===
const replyDatabase = {
  "zia international": "Verified: Zia International, Madina Town, Faisalabad.",
  "adam international": "Verified: Adam International, Faisalabad.",
  "sa rice mills": "Verified: SA Rice Mills, Faisalabad.",
  "al arab rice mills": "Verified: Al Arab Rice Mills, MirzaPur, Lahore.",
  "asif rice mills": "Verified: Asif Rice Mills, Karachi.",
  "mahavir rice mills": "Verified: Mahavir Rice Mills, Link Road Taraori, Karnal, Haryana.",
  "fateh din": "Verified: Fateh Din General Trading LLC, Dubai.",
  "laddo general": "Verified: Laddo General Trading LLC, Alras.",
  "namavar foodstuff": "Verified: Namavar Foodstuff Trading, Dubai.",
  "yastoor ul haq": "Verified: Yastoor Ul Haq Wholesale, Alras.",
  "green and white": "Verified: Green & White Foodstuff Trading, Alras.",
  "si global": "Verified: Si Global, Alras.",
  "sakhi international": "Verified: Sakhi International Foodstuff Trading Co., Alras.",
  "irri 6 broken 100": "Booking Open: Irri 6 Broken 100%, 40Kg PP Bags, C&F Dubai, New Crop 2025, Origin Pakistan — $310.",
  "irri 6 broken 5": "Booking Open: Irri 6 Broken 5%, 40Kg PP Bags, C&F Dubai, New Crop 2025, Origin Pakistan — $380.",
  "1509 creamy sella": "Booking Open: 1509 Creamy Sella, 10x4 40Kg Nonwoven Master Bag, Crop 2025, Origin India — $775.",
  "sona massori steam": "Booking Open: Sona Massori Steam, 18Kg Nonwoven, Crop 2025, Origin India — $520.",
  "swarna raw": "Booking Open: Swarna Raw & Processed, 18Kg Nonwoven, Crop 2025, Origin India — $415.",
  "irri 6 stock": "Available: Irri 6 Broken 5%, 35Kg PP Bags, FCL — Dubai.",
  "1509 stock": "Available: 1509 Creamy Sella, 10x4 40Kg Nonwoven — Dubai.",
  "1121": "1121 Basmati is one of the longest grain rice varieties, known for its aroma, elongation, and fluffiness. Verified for export to UAE, EU, and Gulf markets.",
  "1509": "1509 Basmati is a cost-effective long grain with creamy texture. Verified for ritual and pesticide compliance.",
  "sella 1121": "Sella 1121 is available in Dubai. 10x4 40Kg Nonwoven Master Bags. Booking open for Crop 2025.",
  "basmati rice": "Basmati Rice includes 1121 and 1509 grades. Verified suppliers from India and Pakistan are listed.",
  "rice": "Rice options include Irri, Sella, and Basmati. Type a grade or supplier name for verified availability.",
  "available stock": "Stock availability is updated daily. Type a product name for details.",
  "booking": "Booking is open for verified batches. Contact booking@grains.ae.",
  "supplier": "Type a supplier name to check verification.",
  "dubai": "Dubai Hub is active and verified. Alliya monitors supplier scans daily.",
  "india": "Indian-origin grains are verified for ritual and pesticide compliance.",
  "pakistan": "Pakistani grains are scanned weekly. Irri and Basmati are available.",
  "alras": "Alras terminal is enabled for Sella and Basmati shipments.",
  "grains hub": "Grains Hub is Dubai’s trusted B2B portal for premium grain trade.",
  "shahid bashir": "Shahid Bashir is the founder of Grains Hub, blending poetic branding with technical precision.",
  "founder": "Founder: Shahid Bashir. Based in Dubai and Lahore, leading with trust and emotional discipline."
};

// === LIVE STOCK (OPTIONAL - REMOVE IF NOT READY) ===
// Comment out this whole section if stock.json not ready
/*
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
      }
    } catch (err) {
      console.error('Stock fetch failed:', err.message);
    }
  }
  return cachedStock;
}
*/

// === FALLBACK ===
function fallback(query) {
  return `Alliya couldn’t verify "${query}". <a href="https://wa.me/971585521976?text=${encodeURIComponent(query)}" style="color:#25D366;">Ask on WhatsApp</a>`;
}

// === ROUTE ===
router.get('/', async (req, res) => {
  const query = (req.query.q || '').toLowerCase().trim();
  if (!query) return res.json({ reply: 'Ask about rice, suppliers, FCL...' });

  // 1. Check database
  if (replyDatabase[query]) {
    return res.json({ reply: replyDatabase[query] });
  }

  // 2. Optional: Stock search (commented out until stock.json is live)
  /*
  const stock = await getStock();
  const stockMatch = stock.find(item =>
    item.name.toLowerCase().includes(query) ||
    item.origin.toLowerCase().includes(query)
  );
  if (stockMatch) {
    return res.json({
      reply: `${stockMatch.name} from ${stockMatch.origin}: ${stockMatch.price} (${stockMatch.stock} available). <a href="https://wa.me/971585521976?text=Inquiry: ${encodeURIComponent(stockMatch.name)}">Book</a>`
    });
  }
  */

  // 3. Fallback
  res.json({ reply: fallback(query) });
});

module.exports = router;
