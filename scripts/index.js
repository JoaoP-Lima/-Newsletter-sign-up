const inputEmail = document.querySelector("#input-email");
const errorMessage = document.querySelector(".form-message-type_error");
const form = document.querySelector("#card-form");
const cardSuccess = document.querySelector(".card__success");
const successEmail = cardSuccess.querySelector(".card__email-success");
const cardSignUp = document.querySelector(".card");
const dismissButton = document.querySelector("#dismiss-button")


function showError(message) {

      inputEmail.classList.add("form-input-type_error");
        errorMessage.classList.add("form-message-error_active");
        errorMessage.textContent = message;
        inputEmail.setAttribute("aria-invalid", "true");
       
}

function hideError () {
      inputEmail.classList.remove("form-input-type_error");
        errorMessage.classList.remove("form-message-error_active");
        errorMessage.textContent = "";
        inputEmail.setAttribute("aria-invalid", "false");
}


function getEmailErrorMessage () {
    if(inputEmail.validity.valueMissing) {
      return "This field is required"
    } 

    if (inputEmail.validity.typeMismatch) {
        return "Enter a valid email address."
    }

    return "";
}


function validateInput () {
   if(!inputEmail.validity.valid) {
    showError(getEmailErrorMessage());
    return false;
   } 

   hideError();
   return true;
}


inputEmail.addEventListener("input", () => {
   validateInput();
})





form.addEventListener("submit", (evt) => {
    evt.preventDefault();


        if (!validateInput()) {
            return;
    } 

      successEmail.textContent = inputEmail.value;
        cardSuccess.classList.remove("card-hidden");
        cardSignUp.classList.add("card-hidden");
      


        
    
})

dismissButton.addEventListener("click", () => {
    cardSignUp.classList.remove("card-hidden");
      cardSuccess.classList.add("card-hidden");
      form.reset();
      hideError();
})