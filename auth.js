const API_URL = 'http://localhost:5000/api/users'; // Update with your backend URL

// Handle Signup
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');

    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const response = await fetch(`${API_URL}/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Signup successful! Redirecting to login.');
                    window.location.href = 'login.html';
                } else {
                    alert(`Error: ${data.message}`);
                }
            } catch (error) {
                console.error('Signup Error:', error);
            }
        });
    }

    // Handle Login
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            try {
                const response = await fetch(`${API_URL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('userToken', data.token);
                    alert('Login successful! Redirecting...');
                    window.location.href = 'index.html';
                } else {
                    alert(`Error: ${data.message}`);
                }
            } catch (error) {
                console.error('Login Error:', error);
            }
        });
    }
});
