document.addEventListener('DOMContentLoaded', function() {
    // Retrieve contact form data from localStorage
    const contactName = localStorage.getItem('contactName');
    const contactEmail = localStorage.getItem('contactEmail');
    const contactMessage = localStorage.getItem('contactMessage');

    // Display contact form data
    document.getElementById('contactNameDisplay').textContent = `Name: ${contactName}`;
    document.getElementById('contactEmailDisplay').textContent = `Email: ${contactEmail}`;
    document.getElementById('contactMessageDisplay').textContent = `Message: ${contactMessage}`;

    // Retrieve booking form data from localStorage
    const bookName = localStorage.getItem('bookName');
    const bookEmail = localStorage.getItem('bookEmail');
    const bookDate = localStorage.getItem('bookDate');
    const bookTime = localStorage.getItem('bookTime');

    // Display booking form data
    document.getElementById('bookNameDisplay').textContent = `Name: ${bookName}`;
    document.getElementById('bookEmailDisplay').textContent = `Email: ${bookEmail}`;
    document.getElementById('bookDateDisplay').textContent = `Date: ${bookDate}`;
    document.getElementById('bookTimeDisplay').textContent = `Time: ${bookTime}`;
});

