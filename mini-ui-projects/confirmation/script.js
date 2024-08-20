document.getElementById('delete-btn').addEventListener('click', function () {
  document.getElementById('confirmation-box').classList.remove('hidden');
});

document.getElementById('confirm-no').addEventListener('click', function () {
  document.getElementById('confirmation-box').classList.add('hidden');
});

document.getElementById('confirm-yes').addEventListener('click', function () {
  alert('Item deleted!');
  document.getElementById('confirmation-box').classList.add('hidden');
});
