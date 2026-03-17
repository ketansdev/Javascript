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
const addTask = document.querySelector("#add-task-btn");
const tasks = document.querySelectorAll(".task");
const overlay = document.querySelector("#modal-overlay");

let draggedTask = null;

// display modal popup

function showModal() {
  overlay.innerHTML = `
    <div class="modal">
      <h2>Add New Task</h2>
      <input type="text" placeholder="Task title..." />
      <textarea placeholder="Description..." cols="5" rows = "4"></textarea>
      <div class="modal-buttons">
        <button id="modal-cancel">Cancel</button>
        <button id="modal-add">Add Task</button>
      </div>
    </div>
  `;

  overlay.classList.add("active"); // 👈 show karo

  // cancel button
  overlay.querySelector("#modal-cancel").addEventListener("click", closeModal);

  // overlay pe click karo toh band ho jaye
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

function closeModal() {
  overlay.classList.remove("active");
}

function updateCount() {
  [backlog, progress, done].forEach((column) => {
    const taskContainer = column.querySelector(".task-column");
    const countEl = column.querySelector(".count");
    countEl.textContent = taskContainer.querySelectorAll(".task").length;
  });
}

// store the dragged task in a variable
tasks.forEach((task) => {
  task.addEventListener("dragstart", (e) => {
    draggedTask = task;
  });

  task.addEventListener("dragend", () => {
    draggedTask = null;
    // remove class hover-over
    document.querySelectorAll(".column").forEach((col) => {
      col.classList.remove("hover-over");
    });
  });
});

// add drag events on columns
function addDragEventsOnColumn(column) {
  const taskContainer = column.querySelector(".task-column");

  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    // if (!column.contains(e.relatedTarget)) {
    column.classList.remove("hover-over");
    // }
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // 👈 this is the key line
  });

  column.addEventListener("drop", () => {
    console.log("dropped");
    taskContainer.appendChild(draggedTask);
    updateCount();
  });
}

// call function for drag events
addDragEventsOnColumn(backlog);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

updateCount();

addTask.addEventListener("click", showModal);
