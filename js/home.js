var logout = document.getElementById("logout");
logout.addEventListener("click", function () {
window.location.href="index.html";
});
var usersData;
if (localStorage.getItem("users") == null) {
  usersData = [];
} else {
  usersData = JSON.parse(localStorage.getItem("users"));
  document
}
for(i=0;i<usersData.length;i++){
 document.getElementById("welcomeline").innerHTML="Welcome"+" "+usersData[i].name   
}
