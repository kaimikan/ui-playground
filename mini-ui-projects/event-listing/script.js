document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.event-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert('More details coming soon!');
    });
  });
});
