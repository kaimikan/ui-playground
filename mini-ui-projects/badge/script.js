function addBadge() {
  const badgeDescription = document.getElementById('badgeInput').value;
  if (badgeDescription.trim() !== '') {
    // Create new badge element
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = badgeDescription;

    // Add badge to the container
    const badgesContainer = document.getElementById('badgesContainer');
    badgesContainer.appendChild(badge);

    // Clear input field
    document.getElementById('badgeInput').value = '';
  } else {
    alert('Please enter a valid badge description.');
  }
}
