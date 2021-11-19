verify_id = sessionStorage.getItem("id_entered");
if (verify_id) {
  console.log(sessionStorage.getItem("id_entered"));
} else {
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

function deletenow() {
  id_to_fetch = document.getElementById("searchedbookname").value;
  entered_id = sessionStorage.getItem("id_entered");
  booklist = JSON.parse(localStorage.getItem(entered_id + "_booklist"));
  counter = 0;
  for (i of booklist) {
    if (i) {
      if (id_to_fetch == i[0]) {
        delete booklist[counter];
        alert("book is deleted check the list ");
        localStorage.setItem(
          verify_id.toString() + "_booklist",
          JSON.stringify(booklist)
        );
      } else {
        console.log("error");
      }

      console.log(counter);
    } else {
    }
    counter++;
  }
}

function signout() {
  sessionStorage.removeItem("id_entered");
  window.location.href = "login.html";
}
