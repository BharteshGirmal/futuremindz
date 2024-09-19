document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    const messageBox = document.getElementById('message-box');

    if (!name || !email || !mobile || !message) {
        messageBox.textContent = "Please fill out all fields.";
        messageBox.classList.remove('hidden');
    } else {
        messageBox.textContent = ""; // Clear any previous message
        // Here you can add code to send the form data to your server if needed
    }
});
