function login() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const storedEmail = localStorage.getItem('signUpEmail');
    const storedPassword = localStorage.getItem('signUpPassword');

    if (email === storedEmail && password === storedPassword) {
        window.location.href = 'buildResume.html';
    } else {
        alert('Invalid email or password. Please sign up first.');
    }
};

function signUp(){
    const newEmail = document.getElementById('signUpEmail').value;
    const newPassword = document.getElementById('signUpPassword').value;
    
    localStorage.setItem('signUpEmail', newEmail);
    localStorage.setItem('signUpPassword', newPassword);
    alert('Sign up successful!');
};



function clickSignUpButton() {
    setTimeout(function() {
        document.getElementById('SignUpBtn').click();
    }, 500);
}

function redirectToLogin(){
    setTimeout(function() {
        document.getElementById('LogInBtn').click();
    }, 500);
}