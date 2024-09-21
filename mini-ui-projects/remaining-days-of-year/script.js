// Calculate the number of days until the end of the year
function daysUntilEndOfYear() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31); // December 31 of the current year
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

  // Calculate the difference in days
  const daysLeft = Math.round((endOfYear - today) / oneDay);
  return daysLeft;
}

// Display the number of days left on the page
document.getElementById('days-left').textContent = daysUntilEndOfYear();
