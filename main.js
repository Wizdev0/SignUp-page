/* INPUTS */
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");


/* ERROR INPUTS */
const errorFirstName = document.getElementById("error-firstName");
const errorLastName = document.getElementById("error-lastName");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

/* SUBMIT */
const submitBtn = document.getElementById("submit")

/* TO CHECK IF THE EMAIL IS VALID */
function isEmailValid(value) {
    let pattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;
    return pattern.test(value);
}

/* LIVE VALIDATION FOR INPUTS */
firstName.addEventListener("input", () =>{
    if(firstName.value.trim() !== ""){
        errorFirstName.style.display ="none";
        firstName.style.border = "1px solid grey";
        firstName.classList.add("active");
    }
});

lastName.addEventListener("input", () => {
    if(lastName.value.trim() !== "") {
        errorLastName.style.display = "none";
        lastName.style.border = "1px solid grey";
        lastName.classList.add("active");
    }
});

email.addEventListener("input", () => {
    if(isEmailValid(email.value)) {
        errorEmail.style.display = "none";
        email.style.border = "1px solid grey";
        email.classList.add("active");

          // back to normal placeholder
        email.placeholder = "Email Address";
        email.classList.remove("error-placeholder");
    } else {
       errorEmail.style.display = "flex";
       email.style.border = "1px solid red";
       email.classList.remove("active");
    }

});

password.addEventListener("input", () => {
    if(password.value.trim() !== "") {
        errorPassword.style.display = "none"
        password.style.border = "1px solid grey";
        password.classList.add("active");
    } 
  

});


/* TO TRIGGER THE SUBMIT BUTTON */
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    /* FIRST INPUT */
    if(firstName.value.trim() === ""){
       errorFirstName.style.display = "flex";
       firstName.style.border = "1px solid red";
       firstName.classList.remove("active");
    } else {
        errorFirstName.style.display = "none";
        firstName.classList.add("active");
        firstName.style.border = "1px solid grey";
    }

    /* SECOND INPUT */
    if(lastName.value.trim() === ""){
       errorLastName.style.display = "flex";
       lastName.style.border = "1px solid red";
       lastName.classList.remove("active");
    } else {
        errorLastName.style.display = "none";
        lastName.classList.add("active");
        lastName.style.border = "1px solid grey";
    }

    /* THIRD INPUT */
    if(email.value.trim() === "" || !isEmailValid(email.value)){
       errorEmail.style.display = "flex";
       email.style.border = "1px solid red";
       email.classList.remove("active");

         //  SPECIAL ERROR PLACEHOLDER
       email.placeholder = "email@example.com";
       email.classList.add("error-placeholder");
    } else {
        errorEmail.style.display = "none";
        email.classList.add("active");
        email.style.border = "1px solid grey";

        
        // Remove placeholder styling
        email.placeholder = "Email Address";
        email.classList.remove("error-placeholder");
    }

    /* FOURTH INPUT */
    if(password.value.trim() === ""){
       errorPassword.style.display = "flex";
       password.style.border = "1px solid red";
       password.classList.remove("active");
    } else {
        errorPassword.style.display = "none";
        password.classList.add("active");
        password.style.border = "1px solid grey";
    }

    if (
        firstName.value.trim() !== "" &&
        lastName.value.trim() !== "" &&
        isEmailValid(email.value) &&
        password.value.trim() !== ""
    ) {
        location.reload(); // Reload the page
    }
});