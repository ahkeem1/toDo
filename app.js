//SELECTORS
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event) {
  event.preventDefault(); // Prevents form from submiting
  // ToDo Div
  const todoDiv = document.createElement("Div");
  todoDiv.classList.add("todo");

  // Create LI
  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("todoItem");
  todoDiv.appendChild(newToDo);

  // CheckMark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completedButton.classList.add("completeBtn");
  todoDiv.appendChild(completedButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
  trashButton.classList.add("trashBtn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear ToDo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //Delete TODO
  if (item.classList[0] === "trashBtn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //CheckMark
  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("Completed");
  }
}
