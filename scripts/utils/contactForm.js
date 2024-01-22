// Affiche la modale de contact
function displayModal() {
    const modal = document.getElementById("contact_modal");
    const titleModal = document.getElementById("title-modal");
    const namePhotographer = document.querySelector(".name").innerHTML;
	modal.style.display = "flex";
    modal.style.justifyContent = "center";
    document.body.style.overflow = "hidden";
    modal.style.backgroundColor = "rgba(196, 196, 196, 0.40)";
    modal.setAttribute("aria-hidden", "false");
    titleModal.innerHTML = "Contactez-moi<br>" + namePhotographer;
}

//Ferme la modale de contact
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.style.justifyContent = "";
    document.body.style.overflow = "auto";
    modal.style.background = "";
    modal.setAttribute("aria-hidden", "true");
}

// Validation du formulaire de contact
function validate(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;

    const checkFirstName = checkInput(firstName, "name");
    const checkLastName = checkInput(lastName, "name");
    const checkMail = checkInput(mail, "mail");
    const checkMessage = checkInput(message, "message");

    if(checkFirstName && checkLastName && checkMail && checkMessage) {
        console.log("Prénom : " + firstName);
        console.log("Nom : " + lastName);
        console.log("Mail : " + mail);
        console.log("Message : " + message);
    }
    else {
        console.log("Le formulaire comporte des erreurs.");
        return false;
    }
    return false;
}

// Vérifications sur la validation des champs de formulaire
function checkInput(element, type) {
    if(element && type === "name" && element.length > 2) {
        return true;
    }
    if(element && type === "mail") {
        let regex = new RegExp("^[a-z0-9\._-]+@[a-z0-9\._-]+\\.[a-z0-9\._-]+$");
        let resultMail = regex.test(element);
        if(resultMail) {
            return true;
        }
    }
    if(element && type === "message" && element.length > 5) {
        return true;
    }
    return false;
}

// Fermeture de la modale avec la touche echap
const modal = document.getElementById("contact_modal");
const modalHidden = modal.getAttribute("aria-hidden");
document.addEventListener("keydown", (event) => {
    if(modalHidden === "true" && event.key === "Escape") {
        closeModal();
    }
});