const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spin-btn');
const finalValue = document.getElementById('final-value');

// Object that stores values of minimum and maximum angle for each section (3 values)
const rotationValues = [
  { minDegree: 0, maxDegree: 120, value: 'Move' },
  { minDegree: 121, maxDegree: 240, value: 'Draw' },
  { minDegree: 241, maxDegree: 360, value: 'Code' },
];

// Size of each piece (3 equal sections)
const data = [33.33, 33.33, 33.33];

// Background color for each piece
var pieColors = ['#a23737', '#2c8680', '#a5943d'];

// Create chart
let myChart = new Chart(wheel, {
  // Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  // Chart Type Pie
  type: 'pie',
  data: {
    // Labels (Move, Draw, Code)
    labels: ['Move', 'Draw', 'Code'],
    // Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // Hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      // Display labels inside pie chart
      datalabels: {
        color: '#202020',
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});

// Display value based on the random angle
const valueGenerator = () => {
  let aimDegrees = 360;
  let minDegree = 0;
  let maxDegree = 0;
  let degreeScope = 120;
  for (let i of rotationValues) {
    // If the angleValue is between min and max then display it
    minDegree = (i.minDegree + myChart.options.rotation) % 360;

    maxDegree = (i.maxDegree + myChart.options.rotation) % 360;

    if (aimDegrees >= minDegree && aimDegrees <= degreeScope + minDegree) {
      console.log('Chart Rotation: ', myChart.options.rotation);
      console.log('Angle Rotation: ', aimDegrees);
      console.log('Min: ', minDegree);
      console.log('Max: ', maxDegree);
      console.log(i);
      finalValue.innerHTML = `<p>Selected: <b>${i.value}</b></p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

// Spinner count
let count = 0;
// 100 rotations for animation and last rotation for result
let resultValue = 101;

finalValue.innerHTML = `<p>Ready to Spin!</p>`;

// Start spinning
spinBtn.addEventListener('click', () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = `<p>Spinning...</p>`;
  // Empty final value
  // Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  // Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    // Set rotation for pie chart
    /*
    Initially to make the pie chart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time, and this reduces by 5 with every count. Eventually on the last rotation, we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    // Update chart with new value
    myChart.update();
    // If rotation > 360, reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator();
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
      spinBtn.disabled = false;
    }
  }, 10);
});
