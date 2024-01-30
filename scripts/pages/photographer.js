//Ce qui concerne la page Photographe
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
if(id) {
    // eslint-disable-next-line no-inner-declarations
    async function getPhotographer(id) {
        const reponse = await fetch("data/photographers.json");
        const photographers = await reponse.json();
        const photographerInfos = photographers.photographers.filter(infos => infos.id == id);
        const photographerMedia = photographers.media.filter(photos => photos.photographerId == id);
        return [photographerInfos[0], photographerMedia];
    }

    // eslint-disable-next-line no-inner-declarations
    async function displayInfosPhotographer(photographerInfos) {
        const main = document.getElementById("main");
        const photographHeader = document.querySelector(".photograph-header");
        const contactButton = document.querySelector(".contact_button");
        // eslint-disable-next-line no-undef
        const photographerModel = photographerTemplateInfos(photographerInfos);
        const resultUserInfos = photographerModel.getUserInfos();
        const userInfos = resultUserInfos.article;
        const imgUser = resultUserInfos.img;
        const priceDiv = resultUserInfos.priceDiv;
        photographHeader.insertBefore(userInfos, contactButton);
        photographHeader.appendChild(imgUser);
        main.appendChild(priceDiv);
    }

    // eslint-disable-next-line no-inner-declarations
    async function displayMediaPhotographer(photographerMedia, name) {
        const main = document.getElementById("main");
        const section = document.createElement("section");
        let mediaLiked = [];
        section.classList.add("media_section");
        main.appendChild(section);
        displayMediaElements(photographerMedia, name);
        // eslint-disable-next-line no-undef
        likesAdd(mediaLiked);
        // eslint-disable-next-line no-undef
        getPhotographerLikes();
        // eslint-disable-next-line no-undef
        sortFunction(photographerMedia, name, mediaLiked);
    }

    // eslint-disable-next-line no-inner-declarations
    function displayMediaElements(photographerMedia, name) {
        const section = document.querySelector(".media_section");
        let currentIndex = 0;
        photographerMedia.forEach(function (media) {
            // eslint-disable-next-line no-undef
            const articleMedia = createMedia(media, name, currentIndex);
            section.appendChild(articleMedia);
            currentIndex++;
        });
    }

    // eslint-disable-next-line no-inner-declarations
    async function init() {
        // Récupère les datas du photographe
        const photographer = await getPhotographer(id);
        displayInfosPhotographer(photographer[0]);
        displayMediaPhotographer(photographer[1], photographer[0].name);
    }
    
    // eslint-disable-next-line no-unused-vars
    window.onload = (event) => {
        init();
    };
}
else {    
    document.location.assign("index.html");
}