document.addEventListener("DOMContentLoaded", () => {

    const signup = document.getElementById("signup");

    signup.addEventListener("click", () => {
        // Check if user is already logged in
        if (sessionStorage.getItem('accessToken')) {
            window.location.replace('/F3-Contest-3/profile.html');

            return;
        } else {
            window.location.replace('/F3-Contest-3/index.html');

        }
    });


    const accessToken = sessionStorage.getItem('accessToken');
    const user = JSON.parse(sessionStorage.getItem(accessToken));
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);

  
    if (user) {
      const userDetails = document.getElementById('user-details');
      userDetails.innerHTML = `
        <p>Name: ${user['Full Name']}</p>
        <p>Email: ${user['Email']}</p>
        <p>Password: ${'X'.repeat(user['Password'].length - 2) + user['Password'].substring(user['Password'].length - 2)}</p>
      `;
    } else {
        window.location.replace('/index.html');
    }

    const logoutButton = document.getElementById('logout-btn');
  logoutButton.addEventListener('click', () => {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem(accessToken);
      window.location.replace('/F3-Contest-3/index.html');
  });
  });
  