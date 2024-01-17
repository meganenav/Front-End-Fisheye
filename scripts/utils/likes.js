function likesAdd() {
    const likes = document.querySelectorAll(".likes_single_img");
    likes.forEach((element) => element.addEventListener("click", () => {
        let id = element.getAttribute("id").split("-");
        id = id[1];
        const pLikes = document.getElementById("plikes-" + id);
        pLikes.innerHTML = "1";
        getPhotographerLikes();
    }));
}

function getPhotographerLikes() {
    const nbLikesSingle = document.querySelectorAll(".nb_likes");
    let pTotalLikes = document.querySelector(".likes");
    let totalLikes = 0;
    nbLikesSingle.forEach((like => 
        totalLikes += parseInt(like.innerHTML)));
    pTotalLikes.innerText = totalLikes;
}