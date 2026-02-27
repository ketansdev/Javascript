const btn = document.getElementById("btn");

function generateProfile() {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const image = document.getElementById("image").value.trim();
  const bio = document.getElementById("bio").value.trim();

  if (!name || !role || !bio) {
    alert("All fields are mandatory!!");
    return;
  }

  const profileImg = document.getElementById("profile-image");
  const profileName = document.getElementById("profile-name");
  const profileRole = document.getElementById("profile-role");
  const profileBio = document.getElementById("profile-bio");

  const profileCard = document.querySelector(".profile-card");

  profileCard.classList.remove("hidden");

  if (image) {
    profileImg.src = image;
  }
  profileName.textContent = name;
  profileRole.textContent = role;
  profileBio.textContent = bio;
}

btn.addEventListener("click", generateProfile);
