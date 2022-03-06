function validate() {
    var result = "";
    result += validateName();
    result += validateEmail();
    result += validatePhoneNumber();

    if (result == "") {
        alert(" Your details has stored successfully. We will contact you shortly.");
        return true;
    }
    alert("Please enter valid input in all text box.");
    return false;
}

// function to get the value of inputs entered by user.
function valueOf(name) {
    return document.getElementsByName(name)[0].value;
}

function validateEmail() {
    var email = valueOf("email");
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (reg.test(email)) {
        document.getElementById("invalidEmail").innerHTML = "";
        return "";
    }
    document.getElementById("invalidEmail").innerHTML = "Error: This email is not valid.";
    return "error";
}

function validateName() {
    var firstname = valueOf("name");
    var reg = /^[A-Za-z]+$/;
    if (!reg.test(firstname)) {
        document.getElementById("invalidName").innerHTML = "Error: The first Name should not contain any numbers.";
        return "error";
    }
    document.getElementById("invalidName").innerHTML = "";
    return "";
}

function validatePhoneNumber() {
    var password = valueOf("phone");
    var reg = /^[A-Za-z]+$/;
    if (reg.test(password)) {
        document.getElementById("invalidPhoneNumber").innerHTML = "Error: Phone number should only contain numeric characters.\n";
        return "error";
    } else if (password.length < 10 || password.length > 10) {
        document.getElementById("invalidPhoneNumber").innerHTML = "Error: Phone number should be 10 charater long.\n";
        return "error";
    }
    return "";
}
