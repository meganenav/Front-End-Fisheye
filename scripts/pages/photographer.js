//Ce qui concerne la page Photographe
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if(!id) {
    console.log("404");
}
else {    
    async function getPhotographer(id) {
        const reponse = await fetch("data/photographers.json");
        const photographers = await reponse.json();
        const photographerInfos = photographers.photographers.filter(infos => infos.id == id);
        const photographerMedia = photographers.media.filter(photos => photos.photographerId == id);
        return [photographerInfos[0], photographerMedia];
    }

    async function displayInfosPhotographer(photographerInfos) {
        const main = document.getElementById("main");
        const photographHeader = document.querySelector(".photograph-header");
        const contactButton = document.querySelector(".contact_button");
        const photographerModel = photographerTemplateInfos(photographerInfos);
        const resultUserInfos = photographerModel.getUserInfos();
        const userInfos = resultUserInfos.article;
        const imgUser = resultUserInfos.img;
        const priceDiv = resultUserInfos.priceDiv;
        photographHeader.insertBefore(userInfos, contactButton);
        photographHeader.appendChild(imgUser);
        main.appendChild(priceDiv);
    }

    async function displayMediaPhotographer(photographerMedia, name) {
        const main = document.getElementById("main");
        const section = document.createElement("section");
        section.classList.add("media_section");
        main.appendChild(section);
        let currentIndex = 0;
        photographerMedia.forEach(function (media) {
            const articleMedia = createMedia(media, name, currentIndex);
            section.appendChild(articleMedia);
            currentIndex++;
        });
    }

    async function init() {
        // Récupère les datas du photographe
        const photographer = await getPhotographer(id);
        displayInfosPhotographer(photographer[0]);
        displayMediaPhotographer(photographer[1], photographer[0].name);
    }
    
    init();
}