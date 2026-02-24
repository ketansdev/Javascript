const tabs = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".content");

console.log(tabs);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));

    content.forEach((c) => {
      c.classList.remove("active");
    });
    tab.classList.add("active");
    content[index].classList.add("active");
  });
});
