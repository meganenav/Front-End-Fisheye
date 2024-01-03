function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const a = document.createElement("a");
        a.setAttribute("href", "/photographer.html?id=" + id);
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