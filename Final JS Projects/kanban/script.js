const backlog = document.querySelector("#backlog");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");
const addTask = document.querySelector("#add-task-btn");
const tasks = document.querySelectorAll(".task");
const taskColumn = document.querySelectorAll(".delete-btn");
const overlay = document.querySelector("#modal-overlay");

const searchBar = document.querySelector("#search-bar");

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
    saveToLocalStorage();
    showToast("Task added ✓", "success");
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
        <button class="edit-btn">✏️</button>
        <h2>${title}</h2>
        <p>${description}</p>
        <button class="delete-btn">Delete</button>
    `;

  card.querySelector(".edit-btn").addEventListener("click", () => {
    showEditModal(card);
  });

  card.querySelector(".delete-btn").addEventListener("click", () => {
    card.remove();
    updateCount();
    saveToLocalStorage();
    showToast("Task deleted", "delete");
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
    column.classList.remove("hover-over");
    updateCount();
    saveToLocalStorage();
  });
}

// save card to local storage

function saveToLocalStorage() {
  const data = {
    backlog: getTasksFromColumn(backlog),
    progress: getTasksFromColumn(progress),
    done: getTasksFromColumn(done),
  };
  localStorage.setItem("kanban", JSON.stringify(data));
}

// get all task from the column
function getTasksFromColumn(column) {
  const tasks = column.querySelectorAll(".task");
  return [...tasks].map((task) => ({
    title: task.querySelector("h2").textContent,
    description: task.querySelector("p").textContent,
  }));
}

// load the tasks from local storage

function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("kanban"));
  if (!data) return; //

  data.backlog.forEach((task) =>
    backlog
      .querySelector(".task-column")
      .appendChild(createTask(task.title, task.description)),
  );
  data.progress.forEach((task) =>
    progress
      .querySelector(".task-column")
      .appendChild(createTask(task.title, task.description)),
  );
  data.done.forEach((task) =>
    done
      .querySelector(".task-column")
      .appendChild(createTask(task.title, task.description)),
  );

  updateCount();
}

// search filter by heading

searchBar.addEventListener("input", () => {
  const searchText = searchBar.value.trim().toLowerCase();

  document.querySelectorAll(".task").forEach((task) => {
    const title = task.querySelector("h2").textContent.toLowerCase();

    if (searchText === "") {
      task.classList.remove("glow");
    } else if (title.includes(searchText)) {
      task.classList.add("glow");
    } else {
      task.classList.remove("glow");
    }
  });
});

// edit card info 
function showEditModal(card) {
  const currentTitle = card.querySelector("h2").textContent;
  const currentDescription = card.querySelector("p").textContent;

  overlay.innerHTML = `
    <div class="modal">
      <h2>Edit Task</h2>
      <input type="text" value="${currentTitle}" />
      <textarea cols="5" rows="4">${currentDescription}</textarea>
      <div class="modal-buttons">
        <button id="modal-cancel">Cancel</button>
        <button id="modal-save">Save</button>
      </div>
    </div>
  `;

  overlay.classList.add("active");

  overlay.querySelector("#modal-cancel").addEventListener("click", closeModal);

  // save button
  overlay.querySelector("#modal-save").addEventListener("click", () => {
    const newTitle = overlay.querySelector("input").value.trim();
    const newDescription = overlay.querySelector("textarea").value.trim();

    if (!newTitle) return;

    // card update karo
    card.querySelector("h2").textContent = newTitle;
    card.querySelector("p").textContent = newDescription;

    saveToLocalStorage();
    closeModal();
    showToast("Task saved ✓", "save");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}


// Function to display toast message 

function showToast(message, type = "success") {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.className = `show ${type}`;

  // 2 second baad hide karo
  setTimeout(() => {
    toast.className = "";
  }, 2000);
}

// call function for drag events
addDragEventsOnColumn(backlog);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

updateCount();
loadFromLocalStorage();
addTask.addEventListener("click", showModal);
