// Get elements
const modal = document.getElementById('profileModal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.getElementById('closeModal');
const profiles = document.querySelectorAll('.profile');

// Function to open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Event listener for profile selection
profiles.forEach((profile) => {
  profile.addEventListener('click', () => {
    profiles.forEach((p) => p.classList.remove('selected')); // Remove 'selected' class from all profiles
    profile.classList.add('selected'); // Add 'selected' class to clicked profile
    alert(`Profile Selected: ${profile.dataset.username}`); // Trigger an action (e.g., load user data)
    modal.style.display = 'none'; // Close modal after selection
  });
});
