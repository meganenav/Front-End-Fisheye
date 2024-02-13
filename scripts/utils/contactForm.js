// Affiche la modale de contact
// eslint-disable-next-line no-unused-vars
function displayModal() {
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    const titleModal = document.getElementById("title-modal");
    const namePhotographer = document.querySelector(".name").innerHTML;
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    document.body.style.overflow = "hidden";
    modal.style.backgroundColor = "rgba(196, 196, 196, 0.40)";
    modal.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    titleModal.innerHTML = "Contactez-moi<br>" + namePhotographer;
}

//Ferme la modale de contact
function closeModal() {
    const main = document.querySelector("main");
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.style.justifyContent = "";
    document.body.style.overflow = "auto";
    modal.style.background = "";
    modal.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
}

//Constantes du formulaire
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const mail = document.getElementById("mail");
const message = document.getElementById("message");
const divFirstName = document.getElementById("block-first-name");
const divLastName = document.getElementById("block-last-name");
const divMail = document.getElementById("block-mail");
const divMessage = document.getElementById("block-message");
const form = document.querySelector("form");

// Vérification de chaque champ
firstName.addEventListener("input", () => {
    checkInput(firstName.value, "firstname");
});

lastName.addEventListener("input", () => {
    checkInput(lastName.value, "lastname");
});

mail.addEventListener("input", () => {
    checkInput(mail.value, "mail");
});

message.addEventListener("input", () => {
    checkInput(message.value, "message");
});

// Validation du formulaire de contact
// eslint-disable-next-line no-unused-vars
function validate(event) {
    event.preventDefault();

    const checkFirstName = checkInput(firstName.value, "firstname");
    const checkLastName = checkInput(lastName.value, "lastname");
    const checkMail = checkInput(mail.value, "mail");
    const checkMessage = checkInput(message.value, "message");
    const pErrorForm = document.querySelector(".form-error-message");
    
    if(checkFirstName && checkLastName && checkMail && checkMessage) {
        console.log("Le formulaire a bien été envoyé");
        console.log("Prénom : " + firstName.value);
        console.log("Nom : " + lastName.value);
        console.log("Mail : " + mail.value);
        console.log("Message : " + message.value);
        form.reset();
        if(pErrorForm) {
            pErrorForm.remove();
        }
        const pValidForm =  document.createElement("p");
        pValidForm.classList.add("form-sent-message");
        pValidForm.textContent = "Le formulaire a été envoyé";
        divMessage.appendChild(pValidForm);
    }
    else {
        if(!pErrorForm) {
            const pInvalidForm =  document.createElement("p");
            pInvalidForm.classList.add("form-error-message");
            pInvalidForm.textContent = "Le formulaire n'est pas correctement rempli";
            divMessage.appendChild(pInvalidForm);
            return false;
        }
    }
    return false;
}

// Vérifications sur la validation des champs de formulaire
function checkInput(element, type) {
    if(element && type === "firstname") {
        if(element.length > 2) {
            if(divFirstName.classList.contains("errorFirstName")) {
                removeErrorMessage(".pErrorFirstName", "errorFirstName", divFirstName);
            }
            return true;
        }
        else {
            if(!divFirstName.classList.contains("errorFirstName")) {
                const errorMessage = "Le prénom doit comporter deux caractères minimum.";
                const errorClassP = "pErrorFirstName";
                const errorClassDiv = "errorFirstName";
                const divForm = divFirstName;
                addErrorMessage(errorMessage, errorClassP, errorClassDiv, divForm);
            }
            return false;
        }
    }
    if(element && type === "lastname") {
        if(element.length > 2) {
            if(divLastName.classList.contains("errorLastName")) {
                removeErrorMessage(".pErrorLastName", "errorLastName", divLastName);
            }
            return true;
        }
        else {
            if(!divLastName.classList.contains("errorLastName")) {
                const errorMessage = "Le nom doit comporter deux caractères minimum.";
                const errorClassP = "pErrorLastName";
                const errorClassDiv = "errorLastName";
                const divForm = divLastName;
                addErrorMessage(errorMessage, errorClassP, errorClassDiv, divForm);
            }
            return false;
        }
    }
    if(element && type === "mail") {
        let regex = new RegExp("^[a-z0-9\\._-]+@[a-z0-9\\._-]+\\.[a-z0-9\\._-]+$");
        let resultMail = regex.test(element);
        if(resultMail) {
            if(divMail.classList.contains("errorMail")) {
                removeErrorMessage(".pErrorMail", "errorMail", divMail);
            }
            return true;
        }
        else {
            if(!divMail.classList.contains("errorMail")) {
                const errorMessage = "Le mail doit être correct.";
                const errorClassP = "pErrorMail";
                const errorClassDiv = "errorMail";
                const divForm = divMail;
                addErrorMessage(errorMessage, errorClassP, errorClassDiv, divForm);
            }
            return false;
        }
    }
    if(element && type === "message") {
        if(element.length > 5) {
            if(divMessage.classList.contains("errorMessage")) {
                removeErrorMessage(".pErrorMessage", "errorMessage", divMessage);
            }
            return true;
        }
        else {
            if(!divMessage.classList.contains("errorMessage")) {
                const errorMessage = "Le message doit comporter au moins 5 caractères.";
                const errorClassP = "pErrorMessage";
                const errorClassDiv = "errorMessage";
                const divForm = divMessage;
                addErrorMessage(errorMessage, errorClassP, errorClassDiv, divForm);
            }
            return false;
        }
    }
    return false;
}

// Ajoute un message d'erreur
function addErrorMessage(message, errorClassP, errorClassDiv, divForm) {
    const error = document.createElement("p");
    error.classList.add(errorClassP);
    divForm.classList.add(errorClassDiv);
    error.textContent = message;
    divForm.appendChild(error);
}

// Enlève le message d'erreur
function removeErrorMessage(errorP, errorClassDiv, divForm) {
    document.querySelector(errorP).remove();
    divForm.classList.remove(errorClassDiv);
}

// Fermeture de la modale avec la touche echap
const modal = document.getElementById("contact_modal");
const modalHidden = modal.getAttribute("aria-hidden");
document.addEventListener("keydown", (event) => {
    if(modalHidden === "true" && event.key === "Escape") {
        closeModal();
    }
});