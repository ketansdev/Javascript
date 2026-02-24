const searchInput = document.querySelector("#search-input");
const results = document.querySelector("#results");

const techSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "REST API",
  "GraphQL",
  "JWT Authentication",
  "Data Structures",
  "Algorithms",
  "System Design",
  "Web Security",
  "Responsive Design",
];

function filterData() {
  const value = this.value.toLowerCase();
  console.log(value);

  if (value === "") {
    results.innerHTML = "";
    results.style.border = "none"; // border hide
    return;
  }

  // Input me value hai → show border

  const filtered = techSkills.filter((item) => {
    console.log(item);
    return item.toLowerCase().includes(value);
  });
  console.log(filtered);
  displayResults(filtered, value);
}

function displayResults(filtered, value) {
  results.innerHTML = "";

  if (filtered.length === 0) {
    results.innerHTML = `<li> No Results Found </li>`;
    return;
  }

  results.style.border = "1px solid #ddd";

  filtered.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    const regex = new RegExp(`(${value})`, "gi"); // 'gi' = global + case-insensitive
    li.innerHTML = item.replace(regex, `<span class="highlight">$1</span>`);

    li.addEventListener("click", () => {
      searchInput.value = item;
      results.innerHTML = "";
      results.style.border = "none";
    });
    results.appendChild(li);
  });
}

searchInput.addEventListener("input", filterData);
