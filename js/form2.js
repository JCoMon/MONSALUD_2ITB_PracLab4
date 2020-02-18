function validate() {
    
    let login = logValidation();
    let pswrd = pswrdValidation();
    let confirm = confirmPswrd();
    let email = eValidation();
    
    if (login == true && pswrd == true && confirm == true && email == true) {
        alert ("Registration Form submitted!");
    } else {
        alert("Submission of Form has failed!");
    }  
}

function logValidation() {
    let login = document.getElementById("login");
    if (login.value == "") {
        login.style.backgroundColor = rgb(255, 180, 180);
        return false;
    } else {
        login.style.backgroundColor = rgb(220, 250, 165);
        return true;
    }
}

function pswrdValidation() {
    let pswrd = document.getElementById("password");
    if (pswrd.value == "") {
        pswrd.style.backgroundColor = rgb(255, 180, 180);
        return false;
    } else {
        pswrd.style.backgroundColor = rgb(220, 250, 165);
        return true;
    }
}

function confirmPswrd() {
    let confirm = document.getElementById("confirm");
    if (samePassword() == false) {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
        confirm.style.backgroundColor = rgb(255, 180, 180);
        return false;
    } else {
        document.getElementById("samePass").innerHTML = "";
        confirm.style.backgroundColor = rgb(220, 250, 165);
        return true;
    }
}

function eValidation() {
    let email = document.getElementById("email");
    if (email.value == "") {
        document.getElementById("wrongEmail").innerHTML = "Mail is wrong";
        email.style.backgroundColor = rgb(255, 180, 180);
        return false;
     } else {
        document.getElementById("wrongEmail").innerHTML = "";
        email.style.backgroundColor = rgb(220, 250, 165);
        return true;
    }
}

function checkPass() {
    
    let pswrd = document.getElementById("password").value;
    let status = document.getElementById("passStatus");
    
    if (pswrd.length == 0) {
        status.innerHTML = "";
    } else if (pswrd.length >= 1 && pswrd.length < 4) {
        status.innerHTML = "Weak";
    } else if (pswrd.length >= 4 && pswrd.length < 8) {
        status.innerHTML = "Medium";
    } else if (pswrd.length >= 8) {
        status.innerHTML = "Strong";
    }
}

function samePassword() {

    let pswrd = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (pswrd == "" && confirm == "") {
        return false;
    } else if (pswrd!= confirm) {
        return false;
    } else {
        return true;
    }

}

function submit() {
    
    let comparePass = samePassword();
    let correct = eValidation();
    
    if (comparePass == true) {
        if (correct == true) {
            alert ("Registration Form submitted!");
            document.getElementsByClassName("logForm").reset();
        } else {
            document.getElementById("wrongEmail").innerHTML = "Mail is wrong";
            document.getElementsByClassName("logForm").reset();
        }
    } else {
        document.getElementById("samePass").innerHTML = "Passwords are not the same";
        document.getElementsByClassName("logForm").reset();
    }
}