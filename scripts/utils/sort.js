// Regroupe les appels aux fonctions pour la fonctionnalité de filtre
// eslint-disable-next-line no-unused-vars
function sortFunction(photographerMedia, name, mediaLiked) {
    const expandButton = document.querySelector(".expand-button");
    expandButton.addEventListener("click", expand);
    const reduceButton = document.querySelector(".reduce-button");
    reduceButton.addEventListener("click", reduce);
    const popularityButton = document.querySelector(".popularity-sort-hidden");
    popularityButton.addEventListener("click", function() {
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("popularity", newPhotographerMedia, name, mediaLiked);
        reduce();
    });
    const dateButton = document.querySelector(".date-sort");
    dateButton.addEventListener("click", function() { 
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("date", newPhotographerMedia, name, mediaLiked);
        reduce();
    });
    const titleButton = document.querySelector(".title-sort");
    titleButton.addEventListener("click", function() { 
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("title", newPhotographerMedia, name, mediaLiked);
        reduce();
    });
}

// Ouvre la liste déroulante de filtres
function expand() {
    const triElements = document.querySelector(".tri-elements");
    const triElementsHidden = document.querySelector(".tri-elements-hidden");
    triElements.style.display = "none";
    triElementsHidden.style.display = "flex";
    triElements.setAttribute("aria-hidden", "true");
    triElementsHidden.setAttribute("aria-hidden", "false");
    document.querySelector(".popularity-sort-hidden").focus();
}

// Ferme la liste déroulante de filtres
function reduce() {
    const triElements = document.querySelector(".tri-elements");
    const triElementsHidden = document.querySelector(".tri-elements-hidden");
    triElements.style.display = "flex";
    triElementsHidden.style.display = "none";
    triElements.setAttribute("aria-hidden", "false");
    triElementsHidden.setAttribute("aria-hidden", "true");
}

// Filtre en fonction des différents éléments
function sortBy(sortBy, photographerMedia, name, mediaLiked) {
    const mediaSection = document.querySelector(".media_section");
    mediaSection.innerHTML = "";
    if(sortBy === "popularity") {
        photographerMedia.sort(compareLikes);
    }
    if(sortBy === "date") {
        photographerMedia.sort(compareDates);
    }
    if(sortBy === "title") {
        photographerMedia.sort(compareTitles);
    }
    // eslint-disable-next-line no-undef
    displayMediaElements(photographerMedia, name);
    // eslint-disable-next-line no-undef
    likesAdd(mediaLiked);
    // eslint-disable-next-line no-undef
    getPhotographerLikes();
}

// On trie les likes par ordre décroissant
function compareLikes(a, b) {
    if (a.likes < b.likes) {
        return 1;
    }
    if (a.likes > b.likes) {
        return -1;
    }
    return 0;
}

// On trie les dates par ordre croissant
function compareDates(a, b) {
    if (a.date < b.date) {
        return -1;
    }
    if (a.date > b.date) {
        return 1;
    }
    return 0;
}

// On trie les titres par ordre alphabétique
function compareTitles(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}

// On change les likes dans le tableau d'objets
function setCurrentLikes(photographerMedia) {
    const nbLikes = document.querySelectorAll(".nb_likes");
    let i = 0;
    nbLikes.forEach(function(like) {
        photographerMedia[i].likes = parseInt(like.innerHTML);
        i++;
    });
    return photographerMedia;
}

//Ecoute le clavier pour le tri
document.addEventListener("keydown", (event) => {
    const expandButtonLink = document.querySelector(".expand-button-link");
    const reduceButtonLink = document.querySelector(".reduce-button-link");
    const activeElement = document.activeElement;
    if(expandButtonLink === activeElement && event.key === "Enter") {
        expand();
    }
    if(reduceButtonLink === activeElement && event.key === "Enter") {
        reduce();
    }
});