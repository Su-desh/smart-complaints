document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the email and password input values
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if email and password match the required values
        if (email === "admin123@gmail.com" && password === "admin123") {
            // If authentication is successful, redirect to dashboard.html
            window.location.href = "dashboard.html";
        } else {
            // If authentication fails, display an error message
            errorMessage.textContent = "Invalid email or password.";
        }
    });
});
