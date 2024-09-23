document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('agreeCheckbox');
  const submitButton = document.getElementById('submitButton');

  // Enable or disable the submit button based on checkbox state
  checkbox.addEventListener('change', function () {
    submitButton.disabled = !checkbox.checked;
  });

  // Optional: prevent form submission if checkbox isn't checked (for extra safety)
  const form = document.getElementById('signupForm');
  form.addEventListener('submit', function (e) {
    if (!checkbox.checked) {
      e.preventDefault();
      alert('You must agree to the Terms of Service before submitting.');
    }
  });
});
