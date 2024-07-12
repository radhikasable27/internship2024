document.addEventListener('DOMContentLoaded', function() {
    const movieSelect = document.getElementById('movie');
    const seatsContainer = document.getElementById('seats');
    const bookButton = document.getElementById('book-btn');

    const seatsNumber = 36; // Total number of seats
    const selectedSeats = [];

    // Populate seats
    for (let i = 1; i <= seatsNumber; i++) {
        const seat = document.createElement('div');
        seat.classList.add('seat');
        seat.innerText = i;
        seat.addEventListener('click', function() {
            if (!seat.classList.contains('selected')) {
                seat.classList.add('selected');
                selectedSeats.push(seat.innerText);
            } else {
                seat.classList.remove('selected');
                const index = selectedSeats.indexOf(seat.innerText);
                if (index > -1) {
                    selectedSeats.splice(index, 1);
                }
            }
            console.log(selectedSeats);
        });
        seatsContainer.appendChild(seat);
    }

    // Book selected seats
    bookButton.addEventListener('click', function() {
        const selectedMovie = movieSelect.options[movieSelect.selectedIndex].text;
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat.');
        } else {
            alert(`Successfully booked ${selectedSeats.length} seat(s) for "${selectedMovie}".`);
            // Reset selected seats
            selectedSeats.length = 0;
            document.querySelectorAll('.seat.selected').forEach(seat => {
                seat.classList.remove('selected');
            });
        }
    });
});