const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

const likeCount = document.querySelector(".like-count");
const dislikeCount = document.querySelector(".dislike-count");

let like = 0;
let dislike = 0;

let likeAction = false;
let disLikeAction = false;

function updateLike() {
  if (likeAction) return;
  if (disLikeAction) {
    dislike--;
    disLikeAction = false;
  }
  like++;
  likeCount.textContent = like;
  dislikeCount.textContent = dislike;
  likeBtn.disabled = true;
  dislikeBtn.disabled = false;
  likeAction = true;
}

function updateDisLike() {
  if (disLikeAction) return;
  if (likeAction) {
    like--;
    likeAction = false;
  }
  dislike++;
  dislikeCount.textContent = dislike;
  likeCount.textContent = like;
  dislikeBtn.disabled = true;
  likeBtn.disabled = false;
  disLikeAction = true;
}

likeBtn.addEventListener("click", updateLike);
dislikeBtn.addEventListener("click", updateDisLike);
