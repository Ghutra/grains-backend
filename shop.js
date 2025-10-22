// ✅ Static Data (will be dynamic soon)
const availableStock = [
  {
    title: "Irri 6 Broken 5%",
    origin: "Pakistan",
    packaging: "35Kg PP Bags",
    location: "Dubai",
    crop: "2025",
    status: "Available"
  },
  {
    title: "1509 Creamy Sella",
    origin: "India",
    packaging: "10x4 40Kg Nonwoven",
    location: "Dubai",
    crop: "2025",
    status: "Available"
  }
];

const bookingEntries = [
  {
    title: "Irri 6 Broken 100%",
    origin: "Pakistan",
    packaging: "40Kg PP Bags",
    price: "$310",
    crop: "2025",
    location: "Dubai"
  },
  {
    title: "Sona Massori Steam",
    origin: "India",
    packaging: "18Kg Nonwoven",
    price: "$520",
    crop: "2025",
    location: "Dubai"
  }
];

// ✅ Render Stock
function renderStock() {
  const grid = document.getElementById('stock-grid');
  availableStock.forEach(item => {
    const card = document.createElement('div');
    card.className = 'stock-card';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Origin:</strong> ${item.origin}</p>
      <p><strong>Packaging:</strong> ${item.packaging}</p>
      <p><strong>Crop:</strong> ${item.crop}</p>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Status:</strong> ${item.status}</p>
    `;
    grid.appendChild(card);
  });
}

// ✅ Render Bookings
function renderBookings() {
  const grid = document.getElementById('booking-grid');
  bookingEntries.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'booking-card';
    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p><strong>Origin:</strong> ${entry.origin}</p>
      <p><strong>Packaging:</strong> ${entry.packaging}</p>
      <p><strong>Crop:</strong> ${entry.crop}</p>
      <p><strong>Location:</strong> ${entry.location}</p>
      <p><strong>Price:</strong> ${entry.price}</p>
    `;
    grid.appendChild(card);
  });
}

// ✅ Trigger on Page Load
window.addEventListener('load', () => {
  renderStock();
  renderBookings();
});

