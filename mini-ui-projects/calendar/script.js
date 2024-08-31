document.addEventListener('DOMContentLoaded', function () {
  const calendarBody = document.getElementById('calendar-body');
  const monthYear = document.getElementById('month-year');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');

  let currentDate = new Date();

  function renderCalendar() {
    calendarBody.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        let cell = document.createElement('td');
        if (i === 0 && j < firstDay) {
          cell.innerHTML = '';
        } else if (date > lastDate) {
          break;
        } else {
          cell.textContent = date;
          if (
            date === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
          ) {
            cell.classList.add('today');
          }
          cell.addEventListener('click', () => {
            const selected = document.querySelector('.selected');

            if (cell.classList.contains('selected'))
              selected.classList.remove('selected');
            else {
              if (selected) selected.classList.remove('selected');
              cell.classList.add('selected');
            }
          });
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  }

  prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});
