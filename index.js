function login() {
    

  const email = document.getElementById("signInEmail").value;

  const password = document.getElementById("signInPassword").value;

  const storedEmail = localStorage.getItem("signUpEmail");
  const storedPassword = localStorage.getItem("signUpPassword");

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
  }else if (email === storedEmail && password === storedPassword) {
    window.location.href = "buildResume.html";
  } else {
    alert("Invalid email or password. Please sign up first.");
  }
}

function signUp() {
  const newEmail = document.getElementById("signUpEmail").value;
  const newPassword = document.getElementById("signUpPassword").value;

  if(newEmail === "" || newPassword === "") {
    alert("Please fill in all fields.");
    return
  }else{
    localStorage.setItem("signUpEmail", newEmail);
    localStorage.setItem("signUpPassword", newPassword);
    alert("Sign up successful!");  
  }
    


  window.location.href = "buildResume.html";
}

function clickSignUpButton() {
  setTimeout(function () {
    document.getElementById("SignUpBtn").click();
  }, 500);
}

function redirectToLogin() {
    console.log("login btn clicked");
  const SignUp = document.getElementById("SignUp").style.display = "none";
  console.log(SignUp);
  setTimeout(function () {
    document.getElementById("LogInBtn").click();
  }, 500);
}

// navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
