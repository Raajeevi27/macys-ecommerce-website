let cart = [];
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');

// Add to cart buttons
document.querySelectorAll('.addToCart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = button.getAttribute('data-price');
    cart.push({ name, price });
    updateCart();
    alert(name + ' added to cart!');
  });
});

function updateCart() {
  cartCount.textContent = cart.length;
}

// Show cart contents
cartBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Cart is empty');
  } else {
    let cartItems = 'Cart Items:\n';
    let total = 0;
    cart.forEach(item => {
      cartItems += item.name + ' - $' + item.price + '\n';
      total += parseInt(item.price);
    });
    cartItems += '\nTotal: $' + total;
    alert(cartItems);
  }
});

// Search functionality
const searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchText)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });
}
