const button = document.getElementById('funButton');

// Toggle pulse effect on button click
button.addEventListener('click', () => {
  button.classList.toggle('pulse');

  if (button.classList.contains('pulse')) {
    button.textContent = 'Active';
  } else {
    button.textContent = 'Click Me!';
  }
});
