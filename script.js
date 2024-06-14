document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'iloveustp' && password === 'admin') {
        alert('Login successful!');
        window.location.href = 'homepage.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Forgot Password functionality is not implemented yet.');
});

document.getElementById('create-account').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
});
