
// no fade on drag

// const cards = document.querySelectorAll(".card");

// cards.forEach(card => {
//   card.addEventListener("dragstart", (e) => {

//     const clone = card.cloneNode(true);

//     clone.style.position = "absolute";
//     clone.style.top = "-9999px";
//     clone.style.left = "-9999px";
//     clone.style.opacity = "1";

//     document.body.appendChild(clone);

//     e.dataTransfer.setDragImage(clone, 0, 0);
//   });
// });

const backlog = document.querySelector("#backlog");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("drag", (e) => {
    // console.log("dragging");
  });
});

function addDragEventsOnColumn(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    if (!column.contains(e.relatedTarget)) {
      column.classList.remove("hover-over");
    }
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // 👈 this is the key line
  });

  column.addEventListener("drop", ()=>{
    console.log("dropped")
  })
}

addDragEventsOnColumn(backlog);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);
