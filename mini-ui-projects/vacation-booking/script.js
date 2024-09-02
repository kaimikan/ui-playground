document.addEventListener('DOMContentLoaded', () => {
  // Example JavaScript: Display an alert when 'Book Now' button is clicked
  const bookButtons = document.querySelectorAll('.book-button');
  bookButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Booking feature coming soon!');
    });
  });

  const reserveButton = document.querySelector('.reserve-button');
  reserveButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Reservation feature coming soon!');
  });
});
