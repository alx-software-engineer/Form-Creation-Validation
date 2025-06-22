document.addEventListener("DOMContentLoaded", function (e) {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Reference to all form inputs.
        const userNameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        let isValid = true;
        const messages = [];
        
        // Username validation
        const trimUserName = userNameInput.Value.trim();
        if (trimUserName.length < 3) {
            isValid = false;
            messages.push("Inavlid UserName Entered");
        }

        // Email Validation
        const trimEmail = emailInput.Value.trim();
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
            isValid = false;
            messages.push("Inavlid Email Entered");
        }

        // Password Validation
        if(passwordInput.length < 8) {
            isValid = false;
            messages.push("Password too short!!");
        }

        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration Successful";
            feedbackDiv.style.color = "#28a745";
        } else {
            
        }

    })
})