function validate(p) {
    
    let login = document.getElementById("login");
    let pswrd = document.getElementById("password");
    let confirm = document.getElementById("confirm");
    let gender = document.getElementById("genderDropdwn");
    let email = document.getElementById("email");
    
    if (login.value == "") {
        style.backgroundColor = "red";
    } 

    if (pswrd.value == "") {
        alert("Missing Password");
    } 
    
    if (confirm.value == "" || confirm.value != pswrd.value) {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
    } 
    
    if (confirm.value == pswrd.value) {
        document.getElementById("samePass").innerHTML = "";
    } 
    
    if (gender.value == "") {
        alert("Missing Gender");
    } 
    
    if (email.value == "") {
        document.getElementById("emailWrong").innerHTML = "Mail is wrong";
    } 
    
    if (email.value != "") {
        document.getElementById("emailWrong").innerHTML = "";
    }
    
    if (login.value != "" && pswrd.value != "" && pswrd.value != "" && confirm.value == pswrd.value && gender.value != "" && email.value != "") {
        document.getElementsByClassName("logForm").submit();
        alert ("Login Credentials sent for processing...");
        document.getElementsByClassName("logForm").reset();
    }
}

function checkPass() {
    
    let password = document.getElementById("pass").value;
    let status = document.getElementById("passStatus");
    
    if (password.length = 8) {
        status.innerHTML = "Strong";
    } else if (password.length = 5) {
        status.innerHTML = "Medium";
    } else if (password.length = 3) {
        status.innerHTML = "Weak";
    } else if (password.length = 0) {
        status.innerHTML = "";
    }
}