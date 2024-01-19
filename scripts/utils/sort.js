function sortFunction(photographerMedia, name) {
    const expandButton = document.querySelector(".expand-button");
    expandButton.addEventListener("click", expand);
    const reduceButton = document.querySelector(".reduce-button");
    reduceButton.addEventListener("click", reduce);
    const popularityButton = document.querySelector(".popularity-sort-hidden");
    popularityButton.addEventListener("click", function() {
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("popularity", newPhotographerMedia, name);
    });
    const dateButton = document.querySelector(".date-sort");
    dateButton.addEventListener("click", function() { 
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("date", newPhotographerMedia, name);
    });
    const titleButton = document.querySelector(".title-sort");
    titleButton.addEventListener("click", function() { 
        const newPhotographerMedia = setCurrentLikes(photographerMedia);
        sortBy("title", newPhotographerMedia, name);
    });
}

function expand() {
    const triElements = document.querySelector(".tri-elements");
    const triElementsHidden = document.querySelector(".tri-elements-hidden");
    triElements.style.display = "none";
    triElementsHidden.style.display = "flex";
}

function reduce() {
    const triElements = document.querySelector(".tri-elements");
    const triElementsHidden = document.querySelector(".tri-elements-hidden");
    triElements.style.display = "flex";
    triElementsHidden.style.display = "none";
}

function sortBy(sortBy, photographerMedia, name) {
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
    displayMediaElements(photographerMedia, name);
    likesAdd();
    getPhotographerLikes();
}

function compareLikes(a, b) {
    if (a.likes < b.likes) {
        return 1;
    }
    if (a.likes > b.likes) {
        return -1;
    }
    return 0;
}

function compareDates(a, b) {
    if (a.date < b.date) {
        return -1;
    }
    if (a.date > b.date) {
        return 1;
    }
    return 0;
}

function compareTitles(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
}

function setCurrentLikes(photographerMedia) {
    const nbLikes = document.querySelectorAll(".nb_likes");
    let i = 0;
    nbLikes.forEach(function(like) {
        photographerMedia[i].likes = parseInt(like.innerHTML);
        i++;
    });
    return photographerMedia;
}