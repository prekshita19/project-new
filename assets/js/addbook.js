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

function addbook() {
  bookname = document.getElementById("bookname").value;
  isbnnumber = document.getElementById("isbnnumber").value;
  authorname = document.getElementById("authorname").value;
  // localStorage.setItem(
  //   verify_id.toString() + "_counter",
  //   parseInt(localStorage[verify_id + "_counter"]) + 1
  // );
  // counterset = localStorage[verify_id + "_counter"];
  lists = [bookname, isbnnumber, authorname];
  old_list = JSON.parse(
    localStorage.getItem(verify_id.toString() + "_booklist")
  );
  if (old_list == null) {
    localStorage.setItem(
      verify_id.toString() + "_booklist",
      JSON.stringify([lists])
    );
  } else {
    old_list.push(lists);
    localStorage.setItem(
      verify_id.toString() + "_booklist",
      JSON.stringify(old_list)
    );
  }
  alert("book added to list, you can go to landing page now...");
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}
