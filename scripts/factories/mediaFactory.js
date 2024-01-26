//Création du média avec ses likes, son titre
function createMedia(media, name, currentIndex) {
    const article = document.createElement("article");
    const a = document.createElement("a");
    article.classList.add("media");
    let mediaHTML = "";
    let nameArray = name.split(" ");
    nameArray = nameArray[0].split("-");
    nameArray = nameArray.join(" ");
    const link = `assets/images/${nameArray}/`;
    if(media.image) {
        a.setAttribute("href", link + media.image);
        a.setAttribute("aria-label", "Open media in lightbox");
        a.setAttribute("onclick", "return displayLightbox(event,'" + link + media.image + "', 'image', '" + media.title + "', '" + currentIndex + "')");
        mediaHTML = document.createElement("img");
        mediaHTML.setAttribute("id", media.id);
        mediaHTML.setAttribute("src", link + media.image);
        mediaHTML.setAttribute("alt", "Photographie avec le titre " + media.title);
        mediaHTML.classList.add("mediaElement");
        mediaHTML.classList.add("mediaElement-" + currentIndex);
    }
    else {
        a.setAttribute("href", link + media.video);
        a.setAttribute("aria-label", "Open media in lightbox");
        a.setAttribute("onclick", "return displayLightbox(event,'" + link + media.video + "', 'video', '" + media.title + "', '" + currentIndex + "')");
        mediaHTML = document.createElement("video");
        mediaHTML.setAttribute("id", media.id);
        mediaHTML.setAttribute("controls", "");
        const src = document.createElement("source");
        src.setAttribute("src", link + media.video);
        mediaHTML.appendChild(src);
        mediaHTML.classList.add("mediaElement");
        mediaHTML.classList.add("mediaElement-" + currentIndex);
    }
    const divDetails = document.createElement("div");
    const pTitle = document.createElement("p");
    pTitle.classList.add("title-media");
    pTitle.textContent = media.title;
    const likesSpan = document.createElement("span");
    const likesImg = document.createElement("img");
    const likesP = document.createElement("p");
    likesSpan.classList.add("nb_likes");
    likesSpan.setAttribute("id", "plikes-" + currentIndex);
    likesSpan.classList.add("mediaid-" + media.id);
    likesSpan.textContent = media.likes;
    likesImg.setAttribute("src", "assets/icons/like_single.svg");
    likesImg.setAttribute("alt", "Icône coeur pour les likes");
    likesImg.setAttribute("aria-label", "Add a like");
    likesImg.classList.add("likes_single_img");
    likesImg.setAttribute("id", "likes-" + currentIndex);
    article.appendChild(a);
    a.appendChild(mediaHTML);
    article.appendChild(divDetails);
    divDetails.appendChild(pTitle);
    divDetails.appendChild(likesP);
    likesP.appendChild(likesSpan);
    likesP.appendChild(likesImg);
    return article;
}