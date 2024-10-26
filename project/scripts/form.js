document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Save data to localStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);

    // Display a confirmation message
    alert(`Thank you, ${name}! We will contact you at ${email}`);
});

