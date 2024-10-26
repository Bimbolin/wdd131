document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Save data to localStorage
    localStorage.setItem('bookName', name);
    localStorage.setItem('bookEmail', email);
    localStorage.setItem('bookDate', date);
    localStorage.setItem('bookTime', time);

    // Display a confirmation message
    alert(`Thank you, ${name}! Your booking for ${date} at ${time} has been received. We will contact you at ${email}`);
});

