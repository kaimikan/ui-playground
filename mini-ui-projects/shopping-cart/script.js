document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartItemsElement = document.querySelector('#cart-items tbody');
  const cartTotalElement = document.getElementById('cart-total');
  const cartSection = document.querySelector('.cart-section');
  const toggleCartButton = document.getElementById('toggle-cart');

  // Toggle Cart visibility
  toggleCartButton.addEventListener('click', () => {
    if (
      cartSection.style.display === 'none' ||
      cartSection.style.display !== 'block'
    ) {
      cartSection.style.display = 'block';
    } else {
      cartSection.style.display = 'none';
    }
  });

  // Add to Cart
  document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', (event) => {
      const product = event.target.closest('.product');
      const productId = product.dataset.id;
      const productName = product.dataset.name;
      const productPrice = parseFloat(product.dataset.price);

      addToCart(productId, productName, productPrice);
      updateCart();
    });
  });

  function addToCart(id, name, price) {
    const existingProduct = cart.find((item) => item.id === id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
  }

  // Update cart display
  function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const row = document.createElement('tr');
      row.innerHTML = `
              <td>${item.name}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>${item.quantity}</td>
              <td>$${itemTotal.toFixed(2)}</td>
              <td><button class="remove-item" data-id="${
                item.id
              }">Remove</button></td>
          `;

      cartItemsElement.appendChild(row);
    });

    cartTotalElement.textContent = total.toFixed(2);

    // Add event listeners for removing items
    document.querySelectorAll('.remove-item').forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        removeFromCart(productId);
        updateCart();
      });
    });
  }

  function removeFromCart(id) {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
      cart.splice(index, 1);
    }
  }

  // Checkout button functionality
  document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert('Thank you for your purchase!');
      cart.length = 0;
      updateCart();
      cartSection.style.display = 'none'; // Hide cart after checkout
    }
  });
});
