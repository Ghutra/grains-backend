const BASE_URL = 'https://grains-backend.onrender.com'; // Replace with 
your actual backend URL

function renderStock(data) {
  const grid = document.getElementById('stock-grid');
  grid.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
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

function renderBookings(data) {
  const grid = document.getElementById('booking-grid');
  grid.innerHTML = '';
  data.forEach(entry => {
    const card = document.createElement('div');
    card.className = 'card';
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

window.addEventListener('load', () => {
  fetch(`${BASE_URL}/api/stock`)
    .then(res => res.json())
    .then(data => renderStock(data))
    .catch(err => console.error('Stock fetch failed:', err));

  fetch(`${BASE_URL}/api/bookings`)
    .then(res => res.json())
    .then(data => renderBookings(data))
    .catch(err => console.error('Bookings fetch failed:', err));
});

