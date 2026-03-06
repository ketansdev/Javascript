const addBtn = document.getElementById("add-comment-btn");
const updateBtn = document.getElementById("update-comment-btn");
const input = document.getElementById("comment-input");
const comments = document.querySelector(".comments");

function addComment() {
  if (!input.value) {
    alert("Comment cannot be empty !!");
    return;
  }

  //    add comment
  const div = document.createElement("div");
  div.classList.add("comment-card");
  div.innerHTML = `
        <span id = "comment">${input.value}</span>
        <div>
         <button class = "edit-btn btn" id = "edit-btn">Edit</button>
         <button class = "del-btn btn" id = "delete-btn">Delete</button>
         </div>
    `;
  comments.append(div);

  //   const editBtn = div.querySelector(".edit-btn");
  const comment = document.getElementById("comment");

  const deleteBtn = document.querySelectorAll(".del-btn");
  const editBtn = div.querySelectorAll(".edit-btn");
  let currentSpan = null;

  //    edit comment
  editBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      console.log(e);
      currentSpan = this.parentElement.parentElement.querySelector("span");
      input.value = currentSpan.textContent;
      updateBtn.style.display = "block";
      addBtn.style.display = "none";
    });
  });

  //    update comment
  updateBtn.addEventListener("click", () => {
    console.log("currentspan", currentSpan);
    if (currentSpan) {
      currentSpan.textContent = input.value;
      updateBtn.style.display = "none";
      addBtn.style.display = "block";
      input.value = "";
    }
  });

  //    delete comment

  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  });

  input.value = "";
}

addBtn.addEventListener("click", addComment);
