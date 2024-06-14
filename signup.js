document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const successMessage = document.getElementById('success-message');

    successMessage.textContent = 'Registration successful! Redirecting to homepage...';

    setTimeout(function() {
        window.location.href = 'homepage.html';
    }, 2000);
});
