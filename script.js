window.addEventListener('beforeunload', () => {
    localStorage.clear();
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signup-form');
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");
    const profile = document.getElementById("profile");

    profile.addEventListener("click", () => {
        // Check if user is already logged in
        if (sessionStorage.getItem('accessToken')) {
            window.location.replace('/profile.html');
            return;
        } else {
            window.location.replace('/index.html');
        }
    });

    const signup = document.getElementById("signup");

    signup.addEventListener("click", () => {
        // Check if user is already logged in
        if (sessionStorage.getItem('accessToken')) {
            window.location.replace('/profile.html');
            return;
        } else {
            window.location.replace('/index.html');
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (sessionStorage.getItem('accessToken')) {
            window.location.replace('/profile.html');
            return;
        }

        //get input values
        let name = document.getElementById("name-input").value;
        let email = document.getElementById("email-input").value;
        let password = document.getElementById("password-input").value;
        let confirmPass = document.getElementById("password-confirm-input").value;

        //validate input values
        if (name == "" || email == "" || password == "" || confirmPass == "") {
            errorMessage.textContent = "Error: All the fields are mandatory";
            console.log("Error: All the fields are mandatory");
            successMessage.textContent = "";
            event.preventDefault(); // prevent form submission
            return;
        }

        if (password != confirmPass) {
            errorMessage.textContent = "Passwords dont match";
            successMessage.textContent = "";
            event.preventDefault(); // prevent form submission
            return;
        }

       

        // Generate a random 16-byte string
        const accessToken = window.crypto.getRandomValues(new Uint8Array(16)).join('');
    

        //create profile 
        const user = {
            "Full Name": name,
            "Email": email,
            "Password": password,
            "Access Token": accessToken
        }

        // console.log(user);

        //store in local storage
        sessionStorage.setItem('accessToken', accessToken);
        //storing in session storage
        sessionStorage.setItem(accessToken, JSON.stringify(user));
        
        successMessage.textContent = "Successfully Signed Up!"

        const tempToken = sessionStorage.getItem('accessToken');

        const user2 = sessionStorage.getItem(tempToken);
        // console.log(user2);
        //redirect to profile page
         window.location.href = "./profile.html"
    });
});