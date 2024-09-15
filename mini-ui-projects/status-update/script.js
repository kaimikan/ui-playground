// Simulate progress
let progress = 0;
const progressBar = document.getElementById('progress-bar');
const statusText = document.getElementById('status-text');

function updateProgress() {
  if (progress < 100) {
    progress += 10;
    progressBar.style.width = progress + '%';
  } else {
    clearInterval(progressInterval);
    statusText.innerHTML = 'Download Complete!';
    progressBar.classList.add('completed');
  }
}

// Simulate progress update every second
const progressInterval = setInterval(updateProgress, 1000);
