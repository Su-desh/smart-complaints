document.addEventListener("DOMContentLoaded", function () {
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
        }
    });
});
