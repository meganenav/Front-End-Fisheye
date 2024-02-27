// Ajoute un like si l'image liée n'a pas déjà été likée (class liked et/ou présente dans tableau mediaLiked)
// eslint-disable-next-line no-unused-vars
function likesAdd(mediaLiked) {
    const likes = document.querySelectorAll(".likes_single_img");
    likes.forEach((element) => element.addEventListener("click", () => {
        addLike(mediaLiked, likes, element);
    }));
    document.addEventListener("keydown", (event) => {
        if(document.activeElement.classList.contains("likes-link") && event.key === "Enter") {
            let elements = document.activeElement.children;
            elements = Array.from(elements);
            const element = elements[0];
            addLike(mediaLiked, likes, element);
        }
    });
}

// On modifie les likes totaux du photographe
function getPhotographerLikes() {
    let pTotalLikes = document.querySelector(".likes");
    pTotalLikes.innerText = getPhotographerTotalLikes();
}

// On calcule le nombre de likes totaux
function getPhotographerTotalLikes() {
    const nbLikesSingle = document.querySelectorAll(".nb_likes");
    let totalLikes = 0;
    nbLikesSingle.forEach((like => 
        totalLikes += parseInt(like.innerHTML)));
    return totalLikes;
}

//Fonction pour ajouter un like
function addLike(mediaLiked, likes, element){
    let id = element.getAttribute("id").split("-");
    id = id[1];
    const pLikes = document.getElementById("plikes-" + id);
    const classNames = pLikes.className.split(" ");
    let idMedia = classNames[1].split("-");
    idMedia = idMedia[1];
    if(!pLikes.classList.contains("liked") && !mediaLiked.includes(idMedia)) {
        pLikes.classList.add("liked");
        mediaLiked.push(idMedia);
        let likes = parseInt(pLikes.innerHTML);
        likes++;
        pLikes.innerHTML = likes;
        getPhotographerLikes();
    }
}