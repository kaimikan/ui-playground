const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Symbol size
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

// Create an array for the Y positions of the drops
const drops = Array(columns).fill(0);

// Generate random Katakana characters
function getRandomSymbol() {
  return String.fromCharCode(0x30a0 + Math.random() * 96);
}

// Draw function
function draw() {
  // Semi-transparent background to create fading effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text style
  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  // Loop through each column and draw the symbols
  for (let i = 0; i < drops.length; i++) {
    const text = getRandomSymbol();
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Randomly reset the drop to create a falling effect
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Animate
setInterval(draw, 50);

// Adjust canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drops.length = Math.floor(canvas.width / fontSize);
  drops.fill(0);
});
