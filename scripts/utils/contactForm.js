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

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.style.justifyContent = "";
    document.body.style.overflow = "auto";
    modal.style.background = "";
    modal.setAttribute("aria-hidden", "true");
}

function validate(event) {
    event.preventDefault();
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;
    console.log("Prénom : " + firstName);
    console.log("Nom : " + lastName);
    console.log("Mail : " + mail);
    console.log("Message : " + message);
    return false;
}

const modal = document.getElementById("contact_modal");
const modalHidden = modal.getAttribute("aria-hidden");
document.addEventListener('keydown', (event) => {
    if(modalHidden === "true" && event.key==='Escape') {
        closeModal();
    }
});