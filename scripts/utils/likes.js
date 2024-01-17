function likesAdd() {
    const likes = document.querySelectorAll(".likes_single_img");
    likes.forEach((element) => element.addEventListener("click", () => {
        let id = element.getAttribute("id").split("-");
        id = id[1];
        const pLikes = document.getElementById("plikes-" + id);
        if(!pLikes.classList.contains("liked")){
            pLikes.classList.add("liked");
            let likes = parseInt(pLikes.innerHTML);
            likes++;
            pLikes.innerHTML = likes;
            getPhotographerLikes();
        }
    }));
}

function getPhotographerLikes() {
    let pTotalLikes = document.querySelector(".likes");
    pTotalLikes.innerText = getPhotographerTotalLikes();
}

function getPhotographerTotalLikes() {
    const nbLikesSingle = document.querySelectorAll(".nb_likes");
    let totalLikes = 0;
    nbLikesSingle.forEach((like => 
        totalLikes += parseInt(like.innerHTML)));
    return totalLikes;
}