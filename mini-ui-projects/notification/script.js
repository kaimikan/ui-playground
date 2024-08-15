function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

window.onload = () => {
  showNotification();
};
