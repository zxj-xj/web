
var divLogin = document.querySelector(".header .login");

divLogin.onclick = function () {

  var divLoginArea = document.querySelector(".login-area");
 
  divLoginArea.style.display = "block";
};


var divClose = document.querySelector(".login-area .close");
divClose.onclick = function (e) {
  e.preventDefault(); 
  var divLoginArea = document.querySelector(".login-area");
  divLoginArea.style.display = "none";
};
