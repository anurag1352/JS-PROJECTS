let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "05-Project/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "05-Project/eye-close.png";
  }
};
