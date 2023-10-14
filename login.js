document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
    // Get references to the Login button, username, and password input elements
    var loginButton = document.getElementById("login");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    // Function to enable or disable the login button based on input values
    function toggleLoginButton() {
        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();
        loginButton.disabled = !(usernameValue && passwordValue);
    }

    // Add input event listeners to the username and password fields
    usernameInput.addEventListener("input", toggleLoginButton);
    passwordInput.addEventListener("input", toggleLoginButton);

    // Initially disable the login button
    toggleLoginButton();

    // Add a click event listener to the Login button
    loginButton.addEventListener("click", function () {
        var usernameValue = usernameInput.value.trim();
        var passwordValue = passwordInput.value.trim();

        if (!usernameValue || !passwordValue) {
            alert("Please fill in both username and password fields.");
        } else {
            // Navigate to the dashboard.html page when both fields are filled
            window.location.href = "dashboard.html";
=======
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
>>>>>>> nithin
        }
    });
});
