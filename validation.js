function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Function to validate signup input credentials
function validateSignUpInputCredentials() {
    console.log('Validating sign-up credentials');

    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // Initializing error variables
    let nameErr = emailErr = passwordErr = confirmPasswordErr = true;

    // Validate username
    if (username === "") {
        printError("nameErr", "Please enter your name");
    } else {
        let regex = /^[A-Za-z ]+$/;
        if (regex.test(username) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    // Validate confirm password
    if (confirmPassword === "") {
        printError("confirmPasswordErr", "Please confirm your password");
    } else if (password !== confirmPassword) {
        printError("confirmPasswordErr", "Passwords do not match");
    } else {
        printError("confirmPasswordErr", "");
        confirmPasswordErr = false;
    }

    // Prevent form submission if there are errors
    if (nameErr || emailErr || passwordErr || confirmPasswordErr) {
        return false;
    } else {
        return true;
    }
}

// Function to validate login input credentials
function validateLoginInputCredentials() {
    // Retrieve values from input fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Initializing error variables
    let emailErr = passwordErr = true;

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/; // Fixed assignment operator to '=' and added semicolon
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false; // Set email error to false if valid
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false; // Set password error to false if valid
    }

    // Prevent form submission if there are errors
    if (emailErr || passwordErr) {
        return false; // Return false if there are any errors
    } else {
        return true; // No errors, return true
    }
}

// Example usage for Signup
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Example usage for Signup
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            const result = validateSignUpInputCredentials(this);

            if (result === true) {
                console.log("Signup form is valid!");
                // Submit the form
                this.submit();
            } else {
                console.log("Validation failed."); // Log errors
                // Show errors to the user
            }
        });
    }

    // Example usage for Login
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
            const result = validateLoginInputCredentials(this);

            if (result === true) {
                console.log("Login form is valid!");
                // Submit the form
                this.submit();
            } else {
                console.log("Validation failed."); // Log errors
                // Show errors to the user
            }
        });
    }

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (emailInput && passwordInput) {
        // Attach your event listeners here
        emailInput.addEventListener('input', function () {
            // Handle input for email
        });

        passwordInput.addEventListener('input', function () {
            // Handle input for password
        });
    } else {
        console.error("Email or Password input element not found.");
    }
});