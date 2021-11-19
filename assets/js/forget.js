function password()
{
    email = document.getElementById("email").value;
    console.log(email)
    email_id_ls = localStorage.getItem(email)
    console.log(localStorage[email]);
    if (email_id_ls) {
        alert("your password is :- "+ localStorage[email].toString());
    } else {
      alert("this email id does not exists");
    }
}