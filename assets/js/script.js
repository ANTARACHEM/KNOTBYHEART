// Utility to get URL params
function getParam(key) {
  const url = new URL(window.location);
  return url.searchParams.get(key);
}

// Fetch/display categories or products based on page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop();
  if (path === 'category.html') {
    loadProducts(getParam('cat'));
  } else if (path === 'cart.html') {
    loadCart();
  } else if (path === 'login.html') {
    handleLogin();
  }
});

// Full product data array
const products = [
  { id: 1, cat: 'flowers-bouquets', name: 'CARNATION', price: 300, img: 'https://i.postimg.cc/NMjkfBqm/CARNATION-3.jpg' },
  { id: 2, cat: 'flowers-bouquets', name: 'CARNATION', price: 300, img: 'https://i.postimg.cc/Vk2RR3tc/CARNATION-2.jpg' },
  { id: 3, cat: 'flowers-bouquets', name: 'LAVENDER-TULIP', price: 320, img: 'https://i.postimg.cc/LsbQ8dhM/LAVENDER-LILY.jpg' },
  { id: 4, cat: 'flowers-bouquets', name: 'WHITE-PINK-ROSE', price: 320, img: 'https://i.postimg.cc/QCyd6ddy/WHITE-PINK-ROSE.jpg' },
  { id: 5, cat: 'flowers-bouquets', name: 'SUNFLOWER', price: 280, img: 'https://i.postimg.cc/rpmYTyVJ/SUNFLOWER.jpg' },
  { id: 6, cat: 'flowers-bouquets', name: 'LAVANDER-HEART', price: 170, img: 'https://i.postimg.cc/6q5D8Vwk/HEART-LILY.jpg' },
  { id: 7, cat: 'flowers-bouquets', name: 'PINK-LAVENDER', price: 120, img: 'https://i.postimg.cc/NjbPZ2cF/PINK-LAVENDER.jpg' },
  { id: 8, cat: 'flowers-bouquets', name: 'BLUE-LAVANDER', price: 120, img: 'https://i.postimg.cc/Gmb5MJ66/BLUE-LAVANDER.jpg' },
  { id: 9, cat: 'hair-accessories', name: 'ROSE-JASMINE-GAJRA', price: 420, img: 'https://i.postimg.cc/ncwtQWX0/FLORAL-GAJRA.jpg' },
  { id: 10, cat: 'hair-accessories', name: 'FLORAL-CLAW-CLIP', price: 180, img: 'https://i.postimg.cc/1tccpfH2/ROSE-CLIP.jpg' },
  { id: 11, cat: 'hair-accessories', name: 'JASMINE-GAJRA', price: 380, img: 'https://i.postimg.cc/kG1LKVgB/GAJRA.jpg' },
  { id: 12, cat: 'hair-accessories', name: 'LAVENDER-SCRUNCHIE', price: 129, img: 'https://i.postimg.cc/cJZM8cd9/LAVENDER-SCRUNCHIE.jpg' },
  { id: 13, cat: 'hair-accessories', name: 'MESH-HAIR-BAND', price: 110, img: 'https://i.postimg.cc/XqCpLpWH/HAIR-BAND.jpg' },
  { id: 14, cat: 'hair-accessories', name: 'PLUMMERIA-HAIRTIE', price: 119, img: 'https://i.postimg.cc/Df6P04mb/PLUMMERIA-HAIRTIE.jpg' },
  { id: 15, cat: 'hair-accessories', name: 'ROSE-HAIRTIE', price: 99, img: 'https://i.postimg.cc/y8kPw613/ROSE-HAIRTIE.jpg' },
  { id: 16, cat: 'hair-accessories', name: 'DAISY-HAIRTIE', price: 109, img: 'https://i.postimg.cc/9XYJ9Ng0/DAISY-HAIRTIE.jpg' },
  { id: 17, cat: 'hair-accessories', name: 'MINI-BOW-HAIRTIE', price: 89, img: 'https://i.postimg.cc/hj9MpCSC/BOW-HAIRTIE.jpg' },
  { id: 18, cat: 'bags-purses', name: 'PHONE-PURSE', price: 280, img: 'https://i.postimg.cc/bYVQDX2p/PHONE-PURSE.jpg' },
  { id: 19, cat: 'apparels-wearables', name: 'Lavender Muffler', price: 850, img: 'https://i.postimg.cc/3NXYtbMz/Whats-App-Image-2025-06-30-at-10-26-18-AM.jpg,' },
  { id: 20, cat: 'apparels-wearables', name: 'Hazel Muffler', price: 850, img: 'https://i.postimg.cc/kgT6NwdT/Brown-muffler.jpg' },
  { id: 21, cat: 'other-accessories', name: 'PASSPORT-COVER', price: 250, img: 'https://i.postimg.cc/pVpGrJ1h/PASSPORT-COVER.jpg' },
  { id: 22, cat: 'apparels-wearables', name: 'RED-KIDDY-BOOTS', price: 460, img: 'https://i.postimg.cc/SRsJS5xs/Whats-App-Image-2025-06-30-at-6-04-23-PM-2.jpg' },
  { id: 23, cat: 'keyrings-charms', name: 'RED-HEART-KEYRING', price: 129, img: 'https://i.postimg.cc/s28rGgy5/RED-HEART-KEYRING.jpg' },
  { id: 24, cat: 'keyrings-charms', name: 'PINK-BOW-KEYRING', price: 120, img: 'https://i.postimg.cc/HxHGgDNs/PINK-BOW-KEYRING.jpg' },
  { id: 25, cat: 'keyrings-charms', name: 'RED-BOW-KEYRING', price: 120, img: 'https://i.postimg.cc/xTZWdbZZ/RED-BOW-KEYRING.jpg.jpg' },
  { id: 26, cat: 'keyrings-charms', name: 'VOLLEYBALL-KEYRING', price: 150, img: 'https://i.postimg.cc/6qw7pBny/VOLLEYBALL-KEYRING.jpg' },
  { id: 27, cat: 'keyrings-charms', name: 'CHERRY-KEYRING', price: 129, img: 'https://i.postimg.cc/6qWNdJV1/CHERRY-KEYRING.jpg' },
  { id: 28, cat: 'keyrings-charms', name: 'EVIL-EYE-CHARM', price: 120, img: 'https://i.postimg.cc/rsf2jnQy/EVIL-EYE-KEYRING.jpg' },
  { id: 29, cat: 'keyrings-charms', name: 'BLUE-LILY-OF-THE-VALLEY', price: 180, img: 'https://i.postimg.cc/MKGYfQLq/BLUE.jpg.jpg' },
  { id: 30, cat: 'keyrings-charms', name: 'PINK-LILY-OF-THE-VALLEY', price: 180, img: 'https://i.postimg.cc/tRB3bg4f/PINK.jpg' },
  { id: 31, cat: 'keyrings-charms', name: 'WHITE-LILY-OF-THE-VALLEY', price: 180, img: 'https://i.postimg.cc/4y2VQW0Z/YELLOW.jpg' },
  { id: 32, cat: 'keyrings-charms', name: 'PINK-BRAIDED-BOW-CHARM', price: 79, img: 'https://i.postimg.cc/fbrB8gkB/PINK-BOW-CHARM.jpg' },
  { id: 33, cat: 'keyrings-charms', name: 'LITTLE-MISS-SUNSHINE-CHARM', price: 109, img: 'https://i.postimg.cc/VNxkBm9g/CUTE-SUN-CHARM.jpg' },
  { id: 34, cat: 'hair-accessories', name: 'SUNFLOWER-CLAW-CLIP', price: 119, img: 'https://i.postimg.cc/DZNYHTCx/SUNFLOWER-CLAW-CLIP.jpg' },
  { id: 35, cat: 'apparels-wearables', name: 'ROSE-CHOCKER', price: 220, img: 'https://i.postimg.cc/RZFJVJ4p/ROSE-CHOCKER.jpg' },
  { id: 36, cat: 'keyrings-charms', name: 'SUNFLOWER-KEYRING', price: 150, img: 'https://i.postimg.cc/2843kdsx/SUNFLOWER-KEYRING.jpg' },
  { id: 37, cat: 'keyrings-charms', name: 'YELLOW-BOW-KEYRING', price: 79, img: 'https://i.postimg.cc/WbQmK7M6/YELLOW-BOW-KEYRING.jpg' },
  { id: 38, cat: 'keyrings-charms', name: 'GAMUSA-CHARM', price: 99, img: 'https://i.postimg.cc/85ZC7WMn/GAMUSA-CHARM.jpg' },
  { id: 39, cat: 'keyrings-charms', name: 'WATERMELON-KEYCHAIN', price: 129, img: 'https://i.postimg.cc/Kj48Bz5c/WATERMELON-KEYCHAIN.jpg' },
  { id: 40, cat: 'other-accessories', name: 'FLOWER-BOOKMARK', price: 99, img: 'https://i.postimg.cc/bJyJYLDt/FLOWER-BOOKMARK.jpg' },
  { id: 41, cat: 'hair-accessories', name: 'BLUE-BUTTERFLY-CLAW-CLIP', price: 159, img: 'https://i.postimg.cc/4NmYh88v/BLUE-BUTTERFLY-CLAW-CLIP.jpg' },
  { id: 42, cat: 'hair-accessories', name: 'PINK-BUTTERFLY-CLAW-CLIP', price: 159, img: 'https://i.postimg.cc/2SW301NV/PINK-BUTTERFLY-CLAW-CLIP.jpg' },
  { id: 43, cat: 'hair-accessories', name: 'YELLOW-PIXIE-BOW-HAIRTIE', price: 109, img: 'https://i.postimg.cc/NGPMY6gK/YELLOW-PIXIE-BOW-HAIRTIE.jpg' },
  { id: 44, cat: 'flowers-bouquets', name: 'LARGE-RED-LILY', price: 359, img: 'https://i.postimg.cc/pdYrt3Tv/LARGE-RED-LILY.jpg' },
];

function loadProducts(cat) {
  const grid = document.querySelector('.product-grid');
  const title = document.querySelector('#category-title');
  grid.innerHTML = '';
  
  let filteredProducts = [];
  if (cat && cat !== 'all') {
    filteredProducts = products.filter(p => p.cat === cat);
    title.textContent = cat.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  } else {
    filteredProducts = products;
    title.textContent = 'All Products';
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = '<p>No products found in this category.</p>';
  } else {
    filteredProducts.forEach(p => {
      const el = document.createElement('div');
      el.className = 'card';
      el.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      grid.appendChild(el);
    });
  }
}

// Cart logic with localStorage
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('kb_cart')) || [];
  cart.push(id);
  localStorage.setItem('kb_cart', JSON.stringify(cart));
  alert('Added to cart!');
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('kb_cart')) || [];
  const container = document.querySelector('#cart-items');
  let total = 0;
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(id => {
      const p = products.find(x => x.id === id);
      total += p.price;
      const row = document.createElement('div');
      row.textContent = `${p.name} - ₹${p.price}`;
      container.appendChild(row);
    });
  }
  document.querySelector('#total').textContent = `Total: ₹${total}`;
}

// Simple checkout placeholder
function checkout() {
  alert('Thank you for your order! This is a placeholder for a real checkout process.');
  localStorage.removeItem('kb_cart');
  window.location.reload();
}

// Login placeholder
function handleLogin() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      alert(`Login attempted for user: ${username}. A real login system would require a server to authenticate.`);
      window.location.href = 'index.html';
    });
  }
}