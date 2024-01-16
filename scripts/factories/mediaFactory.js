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
        a.setAttribute("onclick", "return displayLightbox(event,'" + link + media.image + "', 'image', '" + media.title + "', '" + currentIndex + "')");
        mediaHTML = document.createElement("img");
        mediaHTML.setAttribute("id", currentIndex);
        mediaHTML.setAttribute("src", link + media.image);
        mediaHTML.setAttribute("alt", "Photographie avec le titre " + media.title);
        mediaHTML.classList.add("mediaElement");
    }
    else {
        a.setAttribute("href", link + media.video);
        a.setAttribute("onclick", "return displayLightbox(event,'" + link + media.video + "', 'video', '" + media.title + "', '" + currentIndex + "')");
        mediaHTML = document.createElement("video");
        mediaHTML.setAttribute("id", currentIndex);
        mediaHTML.setAttribute("controls", "");
        const src = document.createElement("source");
        src.setAttribute("src", link + media.video);
        mediaHTML.appendChild(src);
        mediaHTML.classList.add("mediaElement");
    }
    const divDetails = document.createElement("div");
    const pTitle = document.createElement("p");
    pTitle.classList.add("title-media");
    const pLikes = document.createElement("p");
    pTitle.textContent = media.title;
    pLikes.textContent = "Likes";
    article.appendChild(a);
    a.appendChild(mediaHTML);
    article.appendChild(divDetails);
    divDetails.appendChild(pTitle);
    divDetails.appendChild(pLikes);
    return article;
}