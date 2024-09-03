document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('flight-search-form');
  const flightTypeInputs = document.querySelectorAll(
    'input[name="flightType"]'
  );
  const returnDateGroup = document.getElementById('return-date-group');
  const flightList = document.getElementById('flight-list');

  // Show/hide the return date field based on flight type
  flightTypeInputs.forEach((input) => {
    input.addEventListener('change', (e) => {
      if (e.target.value === 'roundtrip') {
        returnDateGroup.style.display = 'block';
      } else {
        returnDateGroup.style.display = 'none';
      }
    });
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
    const flightType = document.querySelector(
      'input[name="flightType"]:checked'
    ).value;

    // Display the search results (placeholder data)
    displayFlights([
      {
        airline: 'Airline A',
        price: '$200',
        baggage: '1 free checked bag',
        stops: 'Non-stop',
      },
      {
        airline: 'Airline B',
        price: '$250',
        baggage: 'No free checked bag',
        stops: '1 stop',
      },
    ]);
  });

  // Function to display flight results
  function displayFlights(flights) {
    flightList.innerHTML = '<h2>Available Flights</h2>';
    flights.forEach((flight) => {
      const flightItem = document.createElement('div');
      flightItem.classList.add('flight-item');
      flightItem.innerHTML = `
              <p><strong>Airline:</strong> ${flight.airline}</p>
              <p><strong>Price:</strong> ${flight.price}</p>
              <p><strong>Baggage:</strong> ${flight.baggage}</p>
              <p><strong>Stops:</strong> ${flight.stops}</p>
          `;
      flightList.appendChild(flightItem);
    });
  }
});
