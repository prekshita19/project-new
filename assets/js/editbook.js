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

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}

function fetchbook() {
  id_to_fetch = document.getElementById("searchedbookname").value;
  entered_id = sessionStorage.getItem("id_entered");
  booklist = JSON.parse(localStorage.getItem(entered_id + "_booklist"));

  for (i of booklist) {
    if (i) {
      if (id_to_fetch == i[0]) {
        document.getElementById("bookname").value = i[0];
        document.getElementById("isbnnumber").value = i[1];
        document.getElementById("authorname").value = i[2];
      } else {
        //   console.log("error");
      }
    } else {
      console.log("passed");
    }
  }
}

function updatenow() {
  id_to_fetch = document.getElementById("searchedbookname").value;
  entered_id = sessionStorage.getItem("id_entered");
  allsongslist = JSON.parse(localStorage.getItem(entered_id + "_booklist"));
  for (i of allsongslist) {
    if (i) {
      if (id_to_fetch == i[0]) {
        i[0] = document.getElementById("bookname").value;
        i[1] = document.getElementById("isbnnumber").value;
        i[2] = document.getElementById("authorname").value;
        alert("book is updated check the list ");
        localStorage.setItem(
          verify_id.toString() + "_booklist",
          JSON.stringify(allsongslist)
        );
      } else {
        console.log("error");
      }
    } else {
    }
  }
}
