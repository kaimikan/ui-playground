// Sample Data: Array of Statistics
const statistics = [
  { name: 'Total Revenue', value: '$1.2M', icon: '💰' },
  { name: 'Player Scores', value: '85%', icon: '🏆' },
  { name: 'Machine Efficiency', value: '92%', icon: '⚙️' },
  { name: 'Stock Growth', value: '+12%', icon: '📈' },
  { name: 'Completion Rate', value: '98%', icon: '✅' },
];

// Function to Create Stat Cards
function createStatCard(stat) {
  const card = document.createElement('div');
  card.className = 'stat-card';

  card.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-name">${stat.name}</div>
  `;

  return card;
}

// Function to Render All Stat Cards
function renderStats() {
  const container = document.getElementById('stats-container');
  statistics.forEach((stat) => {
    const card = createStatCard(stat);
    container.appendChild(card);
  });
}

// Function to Render the Pie Chart
function renderPieChart() {
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Finance', 'Engineering', 'Sports', 'Video Games'],
      datasets: [
        {
          data: [30, 25, 20, 25],
          backgroundColor: ['#4caf50', '#2196f3', '#ff5722', '#ffeb3b'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Application Statistics Distribution',
        },
      },
    },
  });
}

// Function to Render the Line Chart
function renderLineChart() {
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Performance Over Time',
          data: [65, 59, 80, 81, 56, 75],
          fill: false,
          borderColor: '#4caf50',
          tension: 0.1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Performance Growth Over Time',
        },
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Performance',
          },
        },
      },
    },
  });
}

// Initialize the Stats and Charts
renderStats();
renderPieChart();
renderLineChart();
