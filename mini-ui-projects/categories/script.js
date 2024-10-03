// Select all filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
// Select all items
const items = document.querySelectorAll('.item');

// Add event listeners to each button
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // If the button is already active, do nothing
    if (button.classList.contains('active')) {
      return;
    }

    // Remove the 'active' class from all buttons and enable all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
      btn.disabled = false;
    });

    // Add 'active' class to the clicked button and disable it
    button.classList.add('active');
    button.disabled = true;

    // Filter items based on category
    items.forEach((item) => {
      if (
        category === 'all' ||
        item.getAttribute('data-category') === category
      ) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});
