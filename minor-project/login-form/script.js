const signUp = document.getElementById('sign-up'),
      signIn = document.getElementById('sign-in'),
      loginIn = document.getElementById('login-in'),
      loginUp = document.getElementById('login-up'),
      verifyEmail = document.getElementById('verify-email'),
      signup_btn = document.getElementById('signup-btn'),
      email = document.getElementById('email');

// Toggle sign-up and sign-in forms
signUp.addEventListener('click', () => {
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');
    loginIn.classList.add('none');
    loginUp.classList.add('block');
});

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');
    loginIn.classList.add('block');
    loginUp.classList.add('none');
});

// Form validation logic sign up
document.getElementById('signup-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    clearErrors(); // Clear previous errors

    let isValid = true;

    function updateInputStyle(input, regex, errorElement, errorMessage) {
        if (input.value.trim() === "") {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = "This field is required.";
            isValid = false;
        } else if (!regex.test(input.value)) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = errorMessage;
            isValid = false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorElement.textContent = "";
        }
    }

    const username = document.getElementById('username');
    const usernameError = document.getElementById('username-Error');
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
    updateInputStyle(username, usernameRegex, usernameError, "Username must be 5-15 characters long and contain only letters and numbers.");

    const email = document.getElementById('email');
    const emailError = document.getElementById('email-Error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    updateInputStyle(email, emailRegex, emailError, "Please enter a valid email address.");

    const password = document.getElementById('password');
    const passwordError = document.getElementById('password-Error');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    updateInputStyle(password, passwordRegex, passwordError, "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");

});
// Form validation logic sign in
document.getElementById('signin-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    clearErrors(); // Clear previous errors

    let isValid = true;

    function updateInputStyle(input, regex, errorElement, errorMessage) {
        if (input.value.trim() === "") {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = "This field is required.";
            isValid = false;
        } else if (!regex.test(input.value)) {
            input.classList.add('invalid');
            input.classList.remove('valid');
            errorElement.textContent = errorMessage;
            isValid = false;
        } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
            errorElement.textContent = "";
        }
    }

    const email = document.getElementById('sign-in-email');
    const emailError = document.getElementById('email-Error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    updateInputStyle(email, emailRegex, emailError, "Please enter a valid email address.");

    const password = document.getElementById('sign-in-password');
    const passwordError = document.getElementById('password-Error');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    updateInputStyle(password, passwordRegex, passwordError, "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.");
});


// Function to clear error messages
function clearErrors() {
    const errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}
