// Get elements
const modalOverlay = document.getElementById('modalOverlay');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-btn');

// Function to open modal
openModalButton.addEventListener('click', () => {
  modalOverlay.classList.add('active'); // Show modal by adding the 'active' class
});

// Function to close modal
const closeModal = () => {
  modalOverlay.classList.remove('active'); // Hide modal by removing the 'active' class
};

// Close modal when 'X' is clicked
closeModalButton.addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});
