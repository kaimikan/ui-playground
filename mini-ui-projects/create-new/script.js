let activeButton = null; // To track the active button
let activeFormType = null; // To track the active form type

function createNew(itemType) {
  const formContainer = document.getElementById('form-container');
  const messageDiv = document.getElementById('message');

  // If the same button is clicked, hide the form and reset the button styles
  if (activeFormType === itemType) {
    formContainer.style.display = 'none';
    messageDiv.textContent = ''; // Clear any previous messages
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    activeButton = null;
    activeFormType = null;
    return;
  }

  // Clear any previous message and show the form container
  messageDiv.textContent = '';
  formContainer.style.display = 'block';

  // Remove active class from any previously active button
  if (activeButton) {
    activeButton.classList.remove('active');
  }

  // Set the new active button and add active class
  activeButton = document.querySelector(
    `button[onclick="createNew('${itemType}')"]`
  );
  activeButton.classList.add('active');
  activeFormType = itemType;

  // Clear the form container content and dynamically generate the form
  formContainer.innerHTML = '';

  let formHtml = '';

  if (itemType === 'Document') {
    formHtml = `
            <h2>Create a New Document</h2>
            <form id="documentForm">
                <label for="docTitle">Document Title</label>
                <input type="text" id="docTitle" placeholder="Enter document title" required>

                <label for="docContent">Content</label>
                <textarea id="docContent" placeholder="Enter document content" rows="4" required></textarea>

                <button type="submit">Create Document</button>
            </form>
        `;
  } else if (itemType === 'Design File') {
    formHtml = `
            <h2>Create a New Design File</h2>
            <form id="designForm">
                <label for="designName">Design Name</label>
                <input type="text" id="designName" placeholder="Enter design file name" required>

                <label for="dimensions">Dimensions (in pixels)</label>
                <input type="number" id="width" placeholder="Width" required>
                <input type="number" id="height" placeholder="Height" required>

                <button type="submit">Create Design File</button>
            </form>
        `;
  } else if (itemType === 'Spreadsheet Column') {
    formHtml = `
            <h2>Create a New Spreadsheet Column</h2>
            <form id="spreadsheetForm">
                <label for="columnName">Column Name</label>
                <input type="text" id="columnName" placeholder="Enter column name" required>

                <label for="columnType">Column Type</label>
                <input type="text" id="columnType" placeholder="Enter column type (e.g. Text, Number)" required>

                <button type="submit">Create Column</button>
            </form>
        `;
  }

  formContainer.innerHTML = formHtml;

  // Attach submit event handler
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    messageDiv.textContent = `${itemType} created successfully!`;
    formContainer.style.display = 'none';
    if (activeButton) {
      activeButton.classList.remove('active');
    }
    activeButton = null;
    activeFormType = null; // Reset the active form type
  });
}
