document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('trendingBanner');
  const items = document.querySelectorAll('.trending-item');

  // Duplicate the items to ensure seamless looping
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    banner.appendChild(clone);
  });

  let scrollSpeed = 0.5; // Speed of scrolling
  let scrollPosition = 0;
  let isScrolling = true; // Control scrolling state

  function scroll() {
    if (isScrolling) {
      scrollPosition -= scrollSpeed;

      // Move the banner left
      banner.style.transform = `translateX(${scrollPosition}px)`;

      // Calculate the total width of one item including gap
      const firstItemWidth =
        items[0].offsetWidth + parseInt(getComputedStyle(banner).gap);

      // When the first item is completely out of view
      if (Math.abs(scrollPosition) >= firstItemWidth) {
        // Move the first item to the end invisibly
        banner.appendChild(banner.firstElementChild);

        // Adjust the scroll position to keep a continuous flow
        scrollPosition += firstItemWidth;
      }
    }

    requestAnimationFrame(scroll); // Repeat the scroll
  }

  // Start scrolling
  scroll();

  // Pause scrolling on hover
  banner.addEventListener('mouseover', function () {
    isScrolling = false;
  });

  // Resume scrolling when not hovering
  banner.addEventListener('mouseout', function () {
    isScrolling = true;
  });
});
