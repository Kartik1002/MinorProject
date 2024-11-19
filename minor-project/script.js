const toggle_btn=document.querySelector('.toggle-btn')
const toggle_btn_icon=document.querySelector('.toggle-btn i')
const dropDownMenu=document.querySelector('.dropdown')

toggle_btn.onclick=function()
{
    dropDownMenu.classList.toggle('open')
    const isOpen=dropDownMenu.classList.contains('open')
    toggle_btn_icon.classList=isOpen ? 'fa-solid fa-xmark':'fa-solid fa-bars'

}
// let isAuthenticated = false;

// // Add event listener for sign-in button
// document.getElementById('signin-btn').addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent form submission

//     const usernameInput = document.getElementById('username-sign-in').value.trim();
//     const passwordInput = document.getElementById('password-sign-in').value.trim();

//     if (!usernameInput || !passwordInput) {
//         alert("Username and password fields cannot be empty.");
//         return;
//     }

//     // Reference to the "users" collection or table in your database
//     const dbRef = ref(db);

//     get(child(dbRef, `users/${usernameInput}`)).then((snapshot) => {
//         if (snapshot.exists()) {
//             const userData = snapshot.val();
//             if (userData.password === passwordInput) {
//                 alert("Login successful!");
//                 isAuthenticated = true; // Set the user as authenticated
//                 // Optionally, hide the login button and show a logout button
//             } else {
//                 alert("Incorrect password. Please try again.");
//             }
//         } else {
//             alert("Username not found. Please check your credentials.");
//         }
//     }).catch((error) => {
//         console.error("Error reading from the database: ", error);
//         alert("An error occurred while trying to sign in. Please try again later.");
//     });
// });
// Prevent access to roadmaps if not signed in
document.querySelectorAll('.roadmap-container .button a').forEach((button) => {
    button.addEventListener('click', function (e) {
        if (!isAuthenticated) {
            e.preventDefault(); // Stop the default action of the link
            alert("Please sign in to view this roadmap.");
        }
    });
});

// // Firebase authentication check
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// // Initialize Firebase Authentication
// const auth = getAuth();

// // Check user authentication status
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, allow access to roadmaps
//         document.querySelectorAll('.view-roadmap').forEach(link => {
//             link.addEventListener('click', (event) => {
//                 // Allow the link to open if the user is signed in
//                 console.log('User is signed in, access granted.');
//             });
//         });
//     } else {
//         // User is not signed in, restrict access
//         document.querySelectorAll('.view-roadmap').forEach(link => {
//             link.addEventListener('click', (event) => {
//                 event.preventDefault(); // Prevent navigation
//                 alert('You need to be signed in to view this content.');
//                 window.location.href = 'login-form/index.html'; // Redirect to login page
//             });
//         });
//     }
// });
