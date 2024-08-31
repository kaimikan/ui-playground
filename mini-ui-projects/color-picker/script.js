document.addEventListener('DOMContentLoaded', function () {
  const colorInput = document.getElementById('colorInput');
  const colorDisplay = document.getElementById('colorDisplay');
  const colorCode = document.getElementById('colorCode');

  colorInput.addEventListener('input', function () {
    const color = colorInput.value;
    colorDisplay.style.backgroundColor = color;
    colorCode.textContent = color;
  });
});
