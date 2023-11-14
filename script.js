document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("myInput");
    const showPasswordCheckbox = document.getElementById("show-password");

    loginButton.addEventListener("click", function () {
        const username = usernameInput.value;
        const password = myInput.value;

        // Replace with your actual username and password validation logic
        if (username === "Padhmashri" && password === "Logesh@831" || username === "Logesh" && password === "Padhmashri@831") {
            // Redirect to the new page with a black background
            window.location.href = "Register.html";
        } 
        
        else {
            alert("Invalid username or password. Please try again.");
        }
    });

    
});