function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement("a");
        a.setAttribute("href", "photographer.html?id=" + id);
        a.setAttribute("aria-label", "Lien vers la page du photographe " + name);
        a.setAttribute("data-id", id);
        a.setAttribute("id", id);
        a.classList.add("link-photographer");
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo du photographe " + name);
        const h2 = document.createElement("h2");
        h2.textContent = name;
        const locationP = document.createElement("p");
        locationP.textContent = city + ", " + country;
        locationP.classList.add("location");
        locationP.setAttribute("aria-label", "Localisation du photographe " + name);
        const taglineP = document.createElement("p");
        taglineP.textContent = tagline;
        taglineP.classList.add("tagline");
        taglineP.setAttribute("aria-label", "Phrase du photographe " + name);
        const priceP = document.createElement("p");
        priceP.textContent = price + "€/jour";
        priceP.classList.add("price");
        priceP.setAttribute("aria-label", "Tarif du photographe " + name);
        article.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(locationP);
        article.appendChild(taglineP);
        article.appendChild(priceP);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

    
function photographerTemplateInfos(photographerInfos) {
    const photographer = photographerInfos;
    const name = photographer.name;
    const portrait = photographer.portrait;
    const picture = `assets/photographers/${portrait}`;
    const city = photographer.city;
    const country = photographer.country;
    const tagline = photographer.tagline;
    const price = photographer.price;
    //const total_likes = getPhotographerLikes();

    function getUserInfos() {
        const article = document.createElement( 'article' );
        const h1 = document.createElement("h1");
        h1.classList.add("name");
        h1.textContent = name;
        const pLocation = document.createElement("p");
        pLocation.textContent = city + ", " + country;
        pLocation.classList.add("location");
        const pTagline = document.createElement("p");
        pTagline.textContent = tagline;
        pTagline.classList.add("tagline");
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Portrait du photographe " + name);
        const priceDiv = document.createElement("div");
        const likesSpan = document.createElement("span");
        const likesImg = document.createElement("img");
        const likesP = document.createElement("p");
        likesP.classList.add("likes");
        likesP.textContent = "0";
        likesImg.setAttribute("src", "assets/icons/like_total.svg");
        const priceP = document.createElement("p");
        priceP.textContent = price + "€ / jour";
        priceDiv.classList.add("pricePhotographer");
        priceDiv.appendChild(likesSpan);
        priceDiv.appendChild(priceP);
        likesSpan.appendChild(likesP);
        likesSpan.appendChild(likesImg);
        article.appendChild(h1);
        article.appendChild(pLocation);
        article.appendChild(pTagline);
        return {article, img, priceDiv};
    }
    return { getUserInfos };
}