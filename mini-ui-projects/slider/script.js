let currentIndex = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider');
  const slides = slider.children;
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
