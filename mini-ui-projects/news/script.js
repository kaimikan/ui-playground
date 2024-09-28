// Sample news data
const newsArticles = [
  {
    title: 'Breaking News: Major Event Happens!',
    summary:
      "A major event has occurred and here's a short summary of what happened.",
    link: '#',
  },
  {
    title: 'Technology Advancements in 2024',
    summary:
      'Explore the new technological advancements that are shaping the future.',
    link: '#',
  },
  {
    title: "Global Politics: What's Next?",
    summary: 'An insight into the current political climate around the world.',
    link: '#',
  },
  {
    title: 'Sports Update: Big Game Recap',
    summary: 'Highlights and recap of the big game that took place last night.',
    link: '#',
  },
];

// Function to display news articles
function displayNews() {
  const newsGrid = document.getElementById('newsGrid');
  newsArticles.forEach((article) => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    newsItem.innerHTML = `
      <a href="${article.link}">
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
      </a>
    `;
    newsGrid.appendChild(newsItem);
  });
}

// Search functionality
function searchNews() {
  const searchInput = document
    .getElementById('searchInput')
    .value.toLowerCase();
  const newsGrid = document.getElementById('newsGrid');
  newsGrid.innerHTML = ''; // Clear previous articles

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchInput) ||
      article.summary.toLowerCase().includes(searchInput)
  );

  if (filteredArticles.length === 0) {
    newsGrid.innerHTML = '<p>No results found.</p>';
  } else {
    filteredArticles.forEach((article) => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <a href="${article.link}">
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
        </a>
      `;
      newsGrid.appendChild(newsItem);
    });
  }
}

// Initialize with default news
document.addEventListener('DOMContentLoaded', displayNews);
