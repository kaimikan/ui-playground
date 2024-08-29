document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Add Task
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = '';
  });

  // Delete or Complete Task
  taskList.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
      const li = event.target.parentElement;
      taskList.removeChild(li);
    } else {
      event.target.classList.toggle('completed');
    }
  });
});
