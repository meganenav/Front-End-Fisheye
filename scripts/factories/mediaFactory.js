function createMedia(media, name) {
    const article = document.createElement("article");
    article.classList.add("media");
    let mediaHTML = "";
    let nameArray = name.split(" ");
    nameArray = nameArray[0].split("-");
    nameArray = nameArray.join(" ");
    const link = `assets/images/${nameArray}/`;
    if(media.image) {
        mediaHTML = document.createElement("img");
        mediaHTML.setAttribute("src", link + media.image);
        mediaHTML.setAttribute("alt", "Photographie avec le titre " + media.title);
    }
    else {
        mediaHTML = document.createElement("video");
        mediaHTML.setAttribute("controls", "");
        const src = document.createElement("source");
        src.setAttribute("src", link + media.video);
        mediaHTML.appendChild(src);
    }
    const divDetails = document.createElement("div");
    const pTitle = document.createElement("p");
    const pLikes = document.createElement("p");
    pTitle.textContent = media.title;
    pLikes.textContent = "Likes";
    article.appendChild(mediaHTML);
    article.appendChild(divDetails);
    divDetails.appendChild(pTitle);
    divDetails.appendChild(pLikes);
    return article;
}