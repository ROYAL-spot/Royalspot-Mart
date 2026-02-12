let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCart();
}

function addToWishlist(name) {
  if (!wishlist.includes(name)) {
    wishlist.push(name);
    updateWishlist();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function increaseQty(index) {
  cart[index].qty += 1;
  updateCart();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateCart();
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  updateWishlist();
}

function clearCart() {
  cart = [];
  updateCart();
}

function clearWishlist() {
  wishlist = [];
  updateWishlist();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function updateWishlist() {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  const totalText = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  if (!cartItems || !totalText || !cartCount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - R ${item.price.toFixed(2)} x ${item.qty}
      <button onclick="increaseQty(${index})">+</button>
      <button onclick="decreaseQty(${index})">-</button>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(li);
    total += item.price * item.qty;
  });

  totalText.textContent = "Total: R " + total.toFixed(2);
  cartCount.textContent = cart.length;
}

function displayWishlist() {
  const wishlistItems = document.getElementById("wishlist-items");
  if (!wishlistItems) return;
  wishlistItems.innerHTML = "";

  wishlist.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button onclick="removeFromWishlist(${index})">Remove</button>
    `;
    wishlistItems.appendChild(li);
  });
}

function applyFilters() {
  const searchInput = document.getElementById('searchInput');
  const categorySelect = document.getElementById('categorySelect');
  const cards = document.querySelectorAll('.product-card');

  if (!searchInput || !categorySelect) return;

  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value.toLowerCase();

  cards.forEach(card => {
    const name = card.dataset.name || "";
    const category = card.dataset.category || "";

    const matchesSearch = name.includes(searchValue);
    const matchesCategory = selectedCategory === 'all' || category === selectedCategory;

    card.style.display = (matchesSearch && matchesCategory) ? 'block' : 'none';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const categoryFromURL = params.get('category');
  const categorySelect = document.getElementById('categorySelect');

  if (categoryFromURL && categorySelect) {
    categorySelect.value = categoryFromURL.toLowerCase();
  }

  applyFilters();
  displayCart();
  displayWishlist();
});

function goToDeliveryForm() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add some products first.");
    return;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "delivery.html";
}

// Cookies banner handling
function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  const banner = document.getElementById('cookie-banner');
  if (banner) banner.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('cookiesAccepted')) {
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'block';
  }
});
