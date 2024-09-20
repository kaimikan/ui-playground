function calculateProgress() {
  // Get values and ensure they are treated as numbers
  const totalPages = parseFloat(document.getElementById('totalPages').value);
  const currentPage = parseFloat(document.getElementById('currentPage').value);

  if (!isNaN(totalPages) && !isNaN(currentPage)) {
    // Calculate progress as a percentage
    const progress = (currentPage / totalPages) * 100;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    // Ensure progress is a valid percentage
    if (progress >= 100) {
      progressBar.style.width = '100%';
      progressText.innerText = "Congratulations! You've finished the book!";
    } else if (progress < 0 || currentPage > totalPages) {
      progressText.innerText = 'Invalid input! Please check the values.';
      progressBar.style.width = '0%';
    } else {
      progressBar.style.width = `${progress}%`;
      progressText.innerText = `You've read ${progress.toFixed(
        2
      )}% of the book.`;
    }
  } else {
    alert(
      'Please enter valid numerical values for both total pages and current page.'
    );
  }
}
