// Affiche la lightbox avec l'image / vidéo et le titre
function displayLightbox(event, link, type, title, currentIndex) {
    event.preventDefault();
    const main = document.querySelector("main");
    const lightbox = document.getElementById("lightbox_modal");
    const lightboxContent = document.querySelector(".lightbox");
    const titleMedia = document.querySelector(".title_media_element");
    lightboxContent.innerHTML = "";
    titleMedia.innerHTML = "";
    const aPrevious = document.createElement("a");
    const aNext = document.createElement("a");
    const previousButton = document.createElement("img");
    const nextButton = document.createElement("img");
    const titleP = document.createElement("p");
    aPrevious.setAttribute("href", "#");
    aPrevious.classList.add("link-previous");
    previousButton.setAttribute("src", "assets/icons/previous.svg");
    previousButton.setAttribute("aria-label", "Previous media");
    previousButton.setAttribute("alt", "Previous Button");
    previousButton.classList.add("previous");
    previousButton.setAttribute("onclick", "return previousMedia(" + currentIndex + ");");
    aNext.setAttribute("href", "#");
    aNext.classList.add("link-next");
    nextButton.setAttribute("src", "assets/icons/next.svg");
    nextButton.setAttribute("aria-label", "Next media");
    nextButton.setAttribute("alt", "Next button");
    nextButton.classList.add("next");
    nextButton.setAttribute("onclick", "return nextMedia(" + currentIndex + ");");
    let media = "";
    titleP.textContent = title;
    if(type === "image") {
        media = document.createElement("img");
        media.setAttribute("src", link);
        media.setAttribute("alt", "Photographie avec le titre "+ title);
        media.classList.add("mediaLightbox");
        media.setAttribute("id", "img-" + currentIndex);
        media.style.maxHeight = (window.innerHeight - 100) + "px";
    }
    else {
        media = document.createElement("video");
        media.setAttribute("controls", "");
        media.setAttribute("id", "img-" + currentIndex);
        const src = document.createElement("source");
        src.setAttribute("src", link);
        media.appendChild(src);
        media.classList.add("mediaLightbox");
        media.style.maxHeight = (window.innerHeight - 100) + "px";
    }
    lightboxContent.appendChild(aPrevious);
    aPrevious.appendChild(previousButton);
    lightboxContent.appendChild(media);
    lightboxContent.appendChild(aNext);
    aNext.appendChild(nextButton);
    titleMedia.appendChild(titleP);
    document.body.style.overflow = "hidden";
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    main.setAttribute("aria-hidden", "true");
    document.querySelector(".link-next").focus();
    return false;
}

// Ferme la lightbox
function closeLightbox() {
    const main = document.querySelector("main");
    const lightbox = document.getElementById("lightbox_modal");
    const lightboxContent = document.querySelector(".lightbox");
    const titleMedia= document.querySelector(".title_media_element");
    lightboxContent.innerHTML = "";
    titleMedia.innerHTML = "";
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
    main.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "auto";
}

// Créer le carrousel avec l'image ou vidéo suivante ou précédente
function carouselMedia(currentIndex, direction) {
    const mediaElements = document.querySelectorAll(".mediaElement");
    const titleMedia = document.querySelectorAll(".title-media");
    let newIndex = currentIndex + direction;
    if(newIndex >= mediaElements.length) {
        newIndex = 0;
    }
    if(newIndex < 0) {
        newIndex = mediaElements.length-1;
    }
    const newMedia = mediaElements[newIndex];
    const title = titleMedia[newIndex].innerHTML;
    let link;
    let type;
    if(newMedia.src) {
        link = newMedia.src;
        type = "image";
    }
    else {
        link = document.querySelector(".mediaElement-" + newIndex).querySelector("source").src;
        type = "video";
    }
    displayLightbox(event, link, type, title, newIndex);
}

// Lance la fonction pour afficher le média précédent
function previousMedia(currentIndex) {
    carouselMedia(currentIndex, -1);
}

// Lance la fonction pour afficher le média suivant
function nextMedia(currentIndex) {
    carouselMedia(currentIndex, 1);
}

//Lance la bonne fonction selon la direction voulue (précédent ou suivant)
function keyCarouselMedia(direction) {
    const media = document.querySelector(".mediaLightbox");
    const id = media.getAttribute("id");
    const currentId = id.split("-");
    if(direction === "previous") {
        previousMedia(parseInt(currentId[1]));
    }
    else {
        nextMedia(parseInt(currentId[1]));
    }
}

// Ecoute le clavier
const lightbox = document.getElementById("lightbox_modal");
let lightboxHidden;
document.addEventListener("keydown", (event) => {
    lightboxHidden = lightbox.getAttribute("aria-hidden");
    //Sur appui de la touche échap
    if(lightboxHidden === "false" && event.key === "Escape") {
        closeLightbox();
    }
    //Sur appui de la flèche gauche
    if(lightboxHidden === "false" && event.key === "ArrowLeft") {
        keyCarouselMedia("previous");
    }
    //Sur appui de la flèche droite
    if(lightboxHidden === "false" && event.key === "ArrowRight") {
        keyCarouselMedia("next");
    }
    //Lorsqu'on appuie sur entrée et que le focus est sur le bouton suivant, l'image suivante s'affiche
    if(document.querySelector(".next")){
        if(lightboxHidden === "false" && event.key === "Enter" && document.querySelector(".link-next") === document.activeElement) {
            keyCarouselMedia("next");
        }
    }
    //Lorsqu'on appuie sur entrée et que le focus est sur le bouton précédent, l'image précédente s'affiche
    if(document.querySelector(".previous")){
        if(lightboxHidden === "false" && event.key === "Enter" && document.querySelector(".link-previous") === document.activeElement) {
            keyCarouselMedia("previous");
        }
    }
});