// Sample content data for pagination (could be anything like pages or components)
const data = [
  'Page 1: Welcome to the pagination demo!',
  'Page 2: Here is some more content.',
  'Page 3: Information continues.',
  'Page 4: We are almost done.',
  'Page 5: Last page, you made it!',
];

// Variables
const itemsPerPage = 1;
const totalPages = Math.ceil(data.length / itemsPerPage);
let currentPage = 1;

// DOM Elements
const pagination = document.getElementById('pagination');
const content = document.getElementById('content');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to render content
function renderContent(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  content.textContent = data.slice(start, end).join('');
}

// Function to render pagination (centered between previous and next buttons)
function renderPagination() {
  pagination.innerHTML = '';

  const li = document.createElement('li');
  li.classList.add('active');

  const a = document.createElement('a');
  a.href = '#';
  a.textContent = `Page ${currentPage} of ${totalPages}`;
  a.classList.add('pagination-number');

  li.appendChild(a);
  pagination.appendChild(li);
}

// Function to update content and pagination
function updatePagination() {
  renderContent(currentPage);
  renderPagination();
  updatePageSwitchButtons();
}

// Function to enable/disable the page switch buttons
function updatePageSwitchButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

// Event Listeners for Previous and Next buttons
prevButton.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener('click', function () {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

// Initial render
updatePagination();
