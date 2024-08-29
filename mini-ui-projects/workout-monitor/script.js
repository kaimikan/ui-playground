document.getElementById('workoutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const workoutType = document.getElementById('workoutType').value;
  const sets = document.getElementById('sets').value;
  const reps = document.getElementById('reps').value;

  const workoutItem = `${workoutType} - Sets: ${sets}, Reps/Time: ${reps}`;
  const li = document.createElement('li');
  li.textContent = workoutItem;
  document.getElementById('workoutList').appendChild(li);

  // Show the logged workouts section
  document.getElementById('loggedWorkoutsSection').style.display = 'block';

  // Clear input fields
  document.getElementById('workoutType').value = '';
  document.getElementById('sets').value = '';
  document.getElementById('reps').value = '';
});

document.getElementById('resetWorkouts').addEventListener('click', function () {
  document.getElementById('workoutList').innerHTML = '';

  // Hide the logged workouts section
  document.getElementById('loggedWorkoutsSection').style.display = 'none';
});
