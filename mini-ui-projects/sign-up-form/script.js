document
  .getElementById('signupForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate the form
    let isValid = true;
    const inputs = document.querySelectorAll('input, select');

    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        isValid = false;
        input.style.borderColor = 'red';
      } else {
        input.style.borderColor = '#ddd';
      }
    });

    if (isValid) {
      // If valid, show success message
      document.getElementById('successMessage').classList.remove('hidden');

      // Optionally, clear the form
      document.getElementById('signupForm').reset();
    }
  });
