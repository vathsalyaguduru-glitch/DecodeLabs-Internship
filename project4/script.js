document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    if(name === ""){
        document.getElementById("nameError").textContent =
        "Name is required";
        valid = false;
    }

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        document.getElementById("emailError").textContent =
        "Enter a valid email";
        valid = false;
    }

    let passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if(!passwordPattern.test(password)){
        document.getElementById("passwordError").textContent =
        "Password must contain Uppercase, Lowercase, Number, Special Character and 8+ characters";
        valid = false;
    }

    if(valid){
        document.getElementById("successMessage").textContent =
        "Form Submitted Successfully!";
    }

});