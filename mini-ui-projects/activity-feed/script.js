const likeButton = document.querySelector('.like-btn');
const likeCount = document.querySelector('.like-count');

likeButton.addEventListener('click', () => {
  let count = parseInt(likeCount.textContent);
  likeCount.textContent = count + 1;
});
