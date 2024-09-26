function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.toggle-icon');

  // Toggle active class
  element.classList.toggle('active');

  // Toggle between plus (+) and minus (×) icons
  if (element.classList.contains('active')) {
    icon.textContent = '×';
  } else {
    icon.textContent = '+';
  }

  // Toggle answer visibility
  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}
