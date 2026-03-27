const profiles = document.querySelector(".main-developer-profiles");
const homeScreenBtn = document.querySelector("#home-screen-btn");
const profileScreenBtn = document.querySelector("#profile-screen-btn");
const searchBtn = document.querySelector("#search-btn");
const profileScreen = document.querySelector(".searched-profiles")

async function loadDefaultProfiles() {
  const url = "https://api.github.com/users";
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Something went wrong");
    }

    console.log(result);

    result.forEach((profile) => {
      let card = document.createElement("div");
      card.classList.add("profile-card");

      card.innerHTML = `
                    <img src="${profile.avatar_url}" alt="${profile.login}" class= "profile-avatar">
                    <h3>${profile.login}</h3>
                    <a href="${profile.html_url}" target="_blank">View Profile &rarr;</a>
    `;

      profiles.append(card);
    });
  } catch (error) {
    console.log(error.message);
  }
}

function displayHomeScreen() {
  document.querySelector(".default-profiles").style.display = "block";
  homeScreenBtn.textContent = "Home Screen";
  profileScreenBtn.style.display = "block";
}

function displayProfileScreen() {
  document.querySelector(".default-profiles").style.display = "none";
  homeScreenBtn.textContent = "Back to Home Screen";
  profileScreenBtn.style.display = "none";
  let profileMessage = document.createElement("div");
  profileMessage.classList.add("profile-message");

  profileMessage.textContent = "No Profile To Dsiplay"
  profileScreen.append(profileMessage)
}

async function displayProfile(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    console.log(data);
    let profile = data;
    let card = document.createElement("div");
    card.classList.add("profile-card");

    card.innerHTML = `
                  <div>
                    <img src="${profile.avatar_url}" alt="${profile.login}" class= "profile-avatar">
                    <h2>${profile.name}</h2>
                    <h3>${profile.login}</h3>
                    <p>${profile.bio}</p>
                  </div>

                  <div>
                    <div>
                      <div>
                        <span>FOllowers</span>
                        <strong>${profile.followers}</strong>
                      </div>
                      <div>
                        <span>Following</span>
                        <strong>${profile.following}</strong>
                      </div>
                      <div>
                        <span>Git Repos</span>
                        <strong>${profile.public_repos}</strong>
                      </div>
                        
                    </div>
                    <a href="${profile.html_url}" target="_blank">View Profile &rarr;</a>
                  </div>
                    
    `;

    // profiles.append(card);
  } catch (error) {
    console.log(error.message);
  }
}

loadDefaultProfiles();

homeScreenBtn.addEventListener("click", displayHomeScreen);
profileScreenBtn.addEventListener("click", displayProfileScreen);
searchBtn.addEventListener("click", () => {
  const input = document.getElementById("search-input");
  console.log(input.value);
  const profileUserName = input.value;
  displayProfile(profileUserName);
});
