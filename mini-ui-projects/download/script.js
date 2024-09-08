// Get modal elements
const modal = document.getElementById('downloadModal');
const downloadButton = document.getElementById('downloadButton');
const closeButton = document.querySelector('.close');

// Show modal when download button is clicked
downloadButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Form submission handling
document.getElementById('downloadForm').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Form data retrieval
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Display form data (replace with actual download logic)
  alert(`Thank you, ${name}! Your download will begin shortly.`);

  // Hide the modal
  modal.style.display = 'none';

  // Reset form
  event.target.reset();
});
