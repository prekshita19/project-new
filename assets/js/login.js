function login()
{
    email = document.getElementById('email_address').value;
    password = document.getElementById("password").value;
    check_email = localStorage.getItem(email)
    
    if (check_email)
    {
        console.log('password retrieved from database', localStorage[email])
        console.log(password)
        console.log(typeof (password))
        console.log(typeof localStorage[email]);
        if (password.toString() === localStorage[email].toString())
        {
            sessionStorage.setItem('id_entered',email)
            sessionStorage.setItem(email, password)
            window.location.href = "landing.html";
        }
        else {
            alert("password is incorrect")
        }
    }
    else {
        alert("Id doesn't exists please create one...")
        window.location.href = "login.html";
    }
}