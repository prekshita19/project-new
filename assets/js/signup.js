// storing in local storage with the help of email and password

function signup() {
  first_name = document.getElementById("first_name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  get_email = localStorage.getItem(email);
  if (get_email) {
    alert("this id is already created");
    //   checking if this id is created or not
  } else {
    localStorage.setItem(email, password);
    alert("Hurraah!!! id is created successfully.....");
  }
}
