const profiles = document.querySelector(".main-developer-profiles");

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

loadDefaultProfiles();
