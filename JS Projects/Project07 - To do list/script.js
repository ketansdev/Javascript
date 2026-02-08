const form = document.querySelector("form");
const resultContainer = document.querySelector(".result-container");
const defaultResult = document.querySelector(".default-result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskInput = document.getElementById("task-input");
  const text = taskInput.value.trim();

  const resultWrapper = document.createElement("div");
  resultWrapper.classList.add("result-wrapper");

  const taskResult = document.createElement("span");
  taskResult.textContent = text;
  taskResult.classList.add("task-result");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    resultWrapper.remove();
    updateDefaultResult();
  });

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    taskResult.style.textDecoration = "line-through";
    taskResult.style.color = "#6b7280";
  });

  function updateDefaultResult() {
    // check if there is any task wrapper inside
    if (resultContainer.querySelector(".result-wrapper")) {
      defaultResult.remove();
    } else {
      resultContainer.appendChild(defaultResult);
    }
  }

  taskInput.value = "";

  resultWrapper.append(taskResult, deleteBtn, completeBtn);
  resultContainer.append(resultWrapper);

  updateDefaultResult();
});
