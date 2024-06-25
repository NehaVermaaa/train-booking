document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let date = document.getElementById('date').value;

    // Display booking details
    let bookingDetails = document.getElementById('bookingDetails');
    bookingDetails.innerHTML = `
        <h2>Booking Details</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
    `;
    bookingDetails.style.display = 'block';
});
