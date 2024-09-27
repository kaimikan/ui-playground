// JavaScript for Splash Screen
document.addEventListener('DOMContentLoaded', function () {
  // Simulate loading time (3 seconds)
  setTimeout(function () {
    // Add the fade-out animation
    document.getElementById('splash-screen').classList.add('fade-out');

    // Hide the splash screen after animation
    setTimeout(function () {
      document.getElementById('splash-screen').style.display = 'none';
      document.getElementById('main-content').classList.remove('hidden');
    }, 1000); // Match the fade-out animation duration
  }, 3000); // Adjust this to control the splash screen display time
});
