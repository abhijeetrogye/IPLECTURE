// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginContent = document.getElementById('loginContent');
    const mainContent = document.getElementById('mainContent');
    const loginForm = document.getElementById('loginForm');
    const logoutBtn = document.getElementById('logout');
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Login form submitted");
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'changeme' && password === 'changeme') {
            loginContent.classList.add('hidden');
            mainContent.classList.remove('hidden');
            console.log("Login successful");
        } else {
            alert('Invalid username or password');
        }
    });

    logoutBtn.addEventListener('click', function() {
        console.log("Logout button clicked");
        loginContent.classList.remove('hidden');
        mainContent.classList.add('hidden');
    });

    togglePassword.addEventListener('click', function() {
        if (password.type === 'password') {
            password.type = 'text';
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            password.type = 'password';
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    });
});
