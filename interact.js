document
  .getElementById("container")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("user-name").value.trim();
    let email = document.getElementById("e-mail").value.trim();
    let password = document.getElementById("Password").value.trim();
    let confirmpassword = document
      .getElementById("confirm-password")
      .value.trim();

    let err_un = document.getElementById("error-username");
    let err_email = document.getElementById("error-email");
    let err_pass = document.getElementById("error-password");
    let err_cpass = document.getElementById("error-cpassword");

    let isvalid = true;

    //use regular expression
    let userPattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailpattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    if (username === "") {
      err_un.innerText = "*Name is not Required";
      isvalid = false;
    } else if (!userPattern.test(username)) {
      err_un.innerText = "*Enter Your Full Name";
      isvalid = false;
    } else if (userPattern.test(username)) {
      err_un.innerText = "";
      isvalid = true;
    }
    if (email === "") {
      err_email.innerText = "*Email is not Required";
      isvalid = false;
    } else if (!emailpattern.test(email)) {
      err_email.innerText = "Enter a Valid Email";
      isvalid = false;
    } else if (emailpattern.test(email)) {
      err_email.innerText = "";
      isvalid = true;
    }
    if (password === "") {
      err_pass.innerText = "*password is not Required";
      isvalid = false;
    } else if (password.length < 3 || password.length > 10) {
      err_pass.innerText = "Enter a password Char between 3 to 10";
      isvalid = false;
    } else if (password.length > 3 || password.length < 10) {
      err_pass.innerText = "";
      isvalid = true;
    }
    if (confirmpassword === "") {
      err_cpass.innerText = "*confirm password is not Required";
      isvalid = false;
    } else if (confirmpassword === !password) {
      err_cpass.innerHTML = "*Password Incorrect";
      isvalid = false;
    } else if (confirmpassword === password) {
      err_cpass.innerHTML = "";
      isvalid = true;
    }
    if (isvalid) {
      alert(`Hi ${username},Welcome to our website`);
      console.log(username, email, password);
    }
  });
