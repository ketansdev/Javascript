const container = document.getElementById("container");
const btn = document.getElementById("fetch-btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  async function github() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);

    for (let user of data) {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const image = document.createElement("img");
      image.src = user.avatar_url;

      const userName = document.createElement("h2");
      userName.innerText = user.login;

      const visitProfile = document.createElement("a");
      visitProfile.href = user.html_url;
    //   visitProfile.target = "_blank";
      visitProfile.innerText = "Visiti Github Profie";

      userCard.append(image, userName, visitProfile);
      container.append(userCard);
    }
  }

  btn.style.display = "none";
  btn.style.textAlign = "center";

  github();
});
