verify_id = sessionStorage.getItem("id_entered");
if (verify_id) {
  console.log(sessionStorage.getItem("id_entered"));
} else {
  window.location.href = "login.html";
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}
