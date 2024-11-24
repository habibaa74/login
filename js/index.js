var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPassword = document.getElementById("password");

var usersData;
if (localStorage.getItem("users") == null) {
  usersData = [];
} else {
  usersData = JSON.parse(localStorage.getItem("users"));
  document
}
function emailexisit(){
    for(i=0;i<usersData.length;i++){
        if(usersData[i].email.toLowerCase()==userEmail.value.toLowerCase()){
            return true
        }
    }
}

// signup
var signup= document.getElementById("signup");
signup.addEventListener("click",function (){
    validatedata()
});

function validatedata(){
var user={
    name:userName.value,
    email:userEmail.value,
    password:userPassword.value,
}
if(userName.value==""||userEmail.value==""||userPassword.value==""){
    alert("All data required")
}
else if(emailexisit()==true){
    alert("email is already exisit")
}
else if(userName.classList.contains("is-valid")&&
userEmail.classList.contains("is-valid")&&userPassword.classList.contains("is-valid")){
    usersData.push(user)
    localStorage.setItem("users",JSON.stringify(usersData))
    alert("success")
}
else{
    alert("data not valid")
}
clear()
}

function clear() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}
// validate
function validate(element) {
  var regex = {
    name: /^[a-z ]{5,30}$/i,
    email: /^[\w](\w|.){10,20}@(gmail|yahoo)\.com$/i,
    password: /^(\w|.){3,}$/i,
  };

  if (regex[element.id].test(element.value) == true) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    element.nextElementSibling.classList.add("d-none")

  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none")
  }
}

// login
var login = document.getElementById("login");
login.addEventListener("click", function () {
  enter()
});

function enter(){
if(userEmail.value==""||userPassword.value==""){
document.getElementById("login1").innerHTML="All data are required"
}
else{
 for(i=0;i<usersData.length;i++){
if(usersData[i].email.toLowerCase()!=userEmail.value.toLowerCase()||
usersData[i].password.toLowerCase()!=userPassword.value.toLowerCase()){
document.getElementById("login2").innerHTML="email or password is not correct"
}
else if(usersData[i].email.toLowerCase()==userEmail.value.toLowerCase()&&
usersData[i].password.toLowerCase()==userPassword.value.toLowerCase()){
window.location.href="home.html"
}
 }   
}
}

