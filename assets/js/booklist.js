verify_id = sessionStorage.getItem("id_entered");
if (verify_id) {
  console.log(sessionStorage.getItem("id_entered"));
} else {
  window.location.href = "login.html";
}

// check_counter = localStorage.getItem(verify_id.toString() + "_counter");
// if (check_counter) {
// } else {
//   localStorage.setItem(verify_id.toString() + "_counter", 0);
// }

entered_id = sessionStorage.getItem("id_entered");
allsongslist = JSON.parse(localStorage.getItem(entered_id + "_booklist"));
for (i of allsongslist) {
  if (i) {
    document.getElementById("tables").innerHTML +=
      "<tr align='center'><td>" +
      i[0] +
      "</td>" +
      "<td>" +
      i[1] +
      "</td>" +
      "<td>" +
      i[2] +
      "</td></tr>";
  } else {
  }
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}
