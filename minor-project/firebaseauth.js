// Import necessary Firebase services
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuD-0IXW8gqjP2ELt2EDpIrGdAOoO8XXg",
    authDomain: "minor-project-college-19625.firebaseapp.com",
    projectId: "minor-project-college-19625",
    storageBucket: "minor-project-college-19625.firebasestorage.app",
    messagingSenderId: "916840615974",
    appId: "1:916840615974:web:23d457d67f93c095ba56e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Sign-up function with email verification
document.getElementById('signup-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed up successfully
            const user = userCredential.user;

            // Save user data to the database
            set(ref(db, 'user/' + username), {
                username: username,
                email: email,
                password: password // Storing passwords in plaintext is not secure. Use this only for learning purposes and switch to proper authentication.
            });

            // Send verification email
            sendEmailVerification(user)
                .then(() => {
                    alert("Sign-up successful! Verification email sent. Please verify your email before logging in.");
                })
                .catch((error) => {
                    console.error('Error sending verification email:', error);
                });
        })
        .catch((error) => {
            console.error('Error during sign-up:', error.code, error.message);
            alert('Error: ' + error.message);
        });
});

// Sign-in function
document.getElementById('signin-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;

            // Check if the user's email is verified
            if (user.emailVerified) {
                alert('Sign-in successful!');
            } else {
                alert('Please verify your email before signing in.');
            }
        })
        .catch((error) => {
            console.error('Error during sign-in:', error.code, error.message);
            alert('Error: ' + error.message);
        });
});

// Firebase authentication check
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Check user authentication status
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, allow access to roadmaps
        document.querySelectorAll('.view-roadmap').forEach(link => {
            link.addEventListener('click', (event) => {
                // Allow the link to open if the user is signed in
                console.log('User is signed in, access granted.');
            });
        });
    } else {
        // User is not signed in, restrict access
        document.querySelectorAll('.view-roadmap').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent navigation
                alert('You need to be signed in to view this content.');
                window.location.href = 'login-form/index.html'; // Redirect to login page
            });
        });
    }
});
onAuthStateChanged(auth, (user) => {
    const loginLink = document.getElementById('login-link');
    if (user) {
        loginLink.textContent = 'Logout';
        loginLink.addEventListener('click', () => {
            auth.signOut().then(() => {
                window.location.reload();
            });
        });
    } else {
        loginLink.textContent = 'Login';
        loginLink.href = 'login-form/index.html';
    }
});
