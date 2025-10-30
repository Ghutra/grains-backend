const express = require('express');
const router = express.Router();

// ✅ Refined Keyword–Response Map
const replyDatabase = {
  // 🇵🇰 Verified Suppliers – Pakistan
  "zia international": "✅ Verified: Zia International, Madina Town, 
Faisalabad.",
  "adam international": "✅ Verified: Adam International, Faisalabad.",
  "sa rice mills": "✅ Verified: SA Rice Mills, Faisalabad.",
  "al arab rice mills": "✅ Verified: Al Arab Rice Mills, MirzaPur, 
Lahore.",
  "asif rice mills": "✅ Verified: Asif Rice Mills, Karachi.",

  // 🇮🇳 Verified Supplier – India
  "mahavir rice mills": "✅ Verified: Mahavir Rice Mills, Link Road 
Taraori, Karnal, Haryana.",

  // 🇦🇪 Verified Suppliers – Dubai
  "fateh din": "✅ Verified: Fateh Din General Trading LLC, Dubai.",
  "laddo general": "✅ Verified: Laddo General Trading LLC, Alras.",
  "namavar foodstuff": "✅ Verified: Namavar Foodstuff Trading, Dubai.",
  "yastoor ul haq": "✅ Verified: Yastoor Ul Haq Wholesale, Alras.",
  "green and white": "✅ Verified: Green & White Foodstuff Trading, 
Alras.",
  "si global": "✅ Verified: Si Global, Alras.",
  "sakhi international": "✅ Verified: Sakhi International Foodstuff 
Trading Co., Alras.",

  // 📦 Booking Entries
  "irri 6 broken 100": "📦 Booking Open: Irri 6 Broken 100%, 40Kg PP Bags, 
C&F Dubai, New Crop 2025, Origin Pakistan — $310.",
  "irri 6 broken 5": "📦 Booking Open: Irri 6 Broken 5%, 40Kg PP Bags, C&F 
Dubai, New Crop 2025, Origin Pakistan — $380.",
  "1509 creamy sella": "📦 Booking Open: 1509 Creamy Sella, 10x4 40Kg 
Nonwoven Master Bag, Crop 2025, Origin India — $775.",
  "sona massori steam": "📦 Booking Open: Sona Massori Steam, 18Kg 
Nonwoven, Crop 2025, Origin India — $520.",
  "swarna raw": "📦 Booking Open: Swarna Raw & Processed, 18Kg Nonwoven, 
Crop 2025, Origin India — $415.",

  // 🏢 Available Stock – Dubai
  "irri 6 stock": "✅ Available: Irri 6 Broken 5%, 35Kg PP Bags, FCL — 
Dubai.",
  "1509 stock": "✅ Available: 1509 Creamy Sella, 10x4 40Kg Nonwoven — 
Dubai.",

  // 🌾 Premium Rice Varieties
  "1121": "1121 Basmati is one of the longest grain rice varieties, known 
for its aroma, elongation, and fluffiness. Verified for export to UAE, EU, 
and Gulf markets.",
  "1509": "1509 Basmati is a cost-effective long grain with creamy 
texture. Verified for ritual and pesticide compliance.",
  "sella 1121": "Sella 1121 is available in Dubai. 10x4 40Kg Nonwoven 
Master Bags. Booking open for Crop 2025.",
  "basmati rice": "Basmati Rice includes 1121 and 1509 grades. Verified 
suppliers from India and Pakistan are listed.",
  "rice": "Rice options include Irri, Sella, and Basmati. Type a grade or 
supplier name for verified availability.",

  // 🔍 General Queries
  "available stock": "Stock availability is updated daily. Type a product 
name for details.",
  "booking": "Booking is open for verified batches. Contact 
booking@grains.ae.",
  "supplier": "Type a supplier name to check verification.",
  "dubai": "Dubai Hub is active and verified. Alliya monitors supplier 
scans daily.",
  "india": "Indian-origin grains are verified for ritual and pesticide 
compliance.",
  "pakistan": "Pakistani grains are scanned weekly. Irri and Basmati are 
available.",
  "alras": "Alras terminal is enabled for Sella and Basmati shipments."
};

// ✅ Route Handler
router.get('/', (req, res) => {
  const query = (req.query.q || '').toLowerCase().trim();
  const reply = replyDatabase[query];

  if (reply) {
    res.json({ reply });
  } else {
    res.json({
      reply: `Alliya couldn’t verify this. Try <a 
href="https://www.bing.com/search?q=${encodeURIComponent(query)}" 
target="_blank" style="color:#0056B3;">Copilot</a> or message us on <a 
href="https://wa.me/971585521976" target="_blank" 
style="color:#25D366;">WhatsApp</a>.`
    });
  }
});

module.exports = router;

