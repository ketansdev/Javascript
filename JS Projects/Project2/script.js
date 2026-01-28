let container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  console.log(e.target);

  document.body.style.backgroundColor = e.target.id;
});
