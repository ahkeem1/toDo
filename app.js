//SELECTORS
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");
const filterOption = document.querySelector(".filterTodo");

// EVENT LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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
  //Add ToDo to Local Storage
  saveLocalTodos(todoInput.value);
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
    //Animation
    todo.classList.add("fade");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //CheckMark
  if (item.classList[0] === "completeBtn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "incompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
