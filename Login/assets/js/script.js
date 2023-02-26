"use strict";




let body = document.querySelector("body");

let email = document.querySelector(".body .login .email");

let password = document.querySelector(".body .login .password");

let button = document.querySelector(".body .login button");

let emailText = document.querySelector(".body .login .email-text");

let passwordText = document.querySelector(".body .login .password-text");



body.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    button.click();
  }
})


button.addEventListener("click", function () {
  if (!!!email.value) {
    emailText.style.display = "block";
    password.style.marginTop = "39px";
  }
  else {
    emailText.style.display = "none";
    // password.style.marginTop = "39px";
    email.style.marginBottom = "0px";


    if (email.value.includes("@")) {
      alert("Qeydiyyatdan kecdiniz");
    }
  }

  if (!!!password.value) {
    passwordText.style.display = "block";
    password.style.marginTop = "39px"
  } else {
    passwordText.style.display = "none";
    password.style.marginTop = "0px";
    // email.style.marginBottom = "12px";
  }


  if (!!!password.value && !!!email.value) {
    passwordText.style.display = "block";
    emailText.style.display = "block";
    // email.style.marginBottom = "39px";
    password.style.marginTop = "0px";

  } else {
    // passwordText.style.display = "none";

    if (!!!email.value) {
      password.style.marginTop = "27px";
    } else {
      password.style.marginTop = "0px";
      email.style.marginBottom = "12px";
    }

    if (!!!password.value) {
      password.style.marginTop = "27px";
    }else {
      password.style.marginTop = "0px";
    }

    if (!!password.value && !!email.value) {
      password.style.marginTop = "27px";
    }

  }


}
)
