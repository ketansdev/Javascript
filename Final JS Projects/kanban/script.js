const backlog = document.querySelector("#backlog");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const addTask = document.querySelector("#add-task-btn");
const tasks = document.querySelectorAll(".task");
const taskColumn = document.querySelectorAll(".delete-btn");
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

  overlay.classList.add("active");

  // cancel button
  overlay.querySelector("#modal-cancel").addEventListener("click", closeModal);

  //   submit
  overlay.querySelector("#modal-add").addEventListener("click", () => {
    const title = overlay.querySelector("input").value.trim();
    const description = overlay.querySelector("textarea").value.trim();

    if (!title) return;

    const card = createTask(title, description);
    backlog.querySelector(".task-column").appendChild(card);

    updateCount();
    closeModal();
  });

  // close modal on clicking overlay
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

function closeModal() {
  overlay.classList.remove("active");
}

function createTask(title, description) {
  const card = document.createElement("div");
  card.classList.add("task");
  card.draggable = true;
  card.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
    updateCount();
  });

  // drag events bhi lagao naye card pe
  card.addEventListener("dragstart", () => {
    draggedTask = card;
  });

  return card;
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
    e.preventDefault();
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
