const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("user-input");
const message = document.getElementById("message");
const profileInfo = document.getElementById("profile-info");

function findUser() {
  console.log("click search");
  let username = userInput.value.trim();
  message.textContent = "";
  if (!username) {
    message.textContent = "Please Enter a Username";
    return;
  }

  profileInfo.textContent = "Loading...";

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found");
      }

      return response.json();
    })
    .then((data) => {
      let html = "";
      console.log("data", data);
      html += `<div class = "info">
        <img src = "${data.avatar_url}">
        <div class = "inner-info">
            <h2>${data.name}</h2>
            <p class = "bio">${data.bio ? data.bio : "No Bio available"}</p>
            <div class = "card-container">
                <div class = "card">
                    <p>Repos</p>
                    <span>${data.public_repos}</span>
                </div>
                <div class = "card">
                    <p>Followers</p>
                    <span>${data.followers}</span>
                </div>
                <div class = "card">
                    <p>Following</p>
                    <span>${data.following}</span>
                </div>
            </div>
            <a href="${data.html_url}" target="_blank">View Profile</a>
        </div>
      </div>`;

      profileInfo.innerHTML = html;
    })
    .catch((error) => {
      console.log("Error:", error);
      profileInfo.innerHTML = "";
      message.textContent = "User not found";
    });
}

searchBtn.addEventListener("click", findUser);
