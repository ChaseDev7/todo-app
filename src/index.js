import './style.css';
import './left.css';
import './main.css';
import './new.css';
import { newForm } from './new-todo-form';
import { showDefaultProjectList } from './projects';

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");
navBar.textContent = "Todo App";
document.body.appendChild(navBar);

// ---- DOCUMENT CONTAINER ----
const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

// ---- LEFT SIDE CONTAINER ----
const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

// ---- Container for PROJECTS TITLE and LIST ----
const projectListContainer = document.createElement("div");
projectListContainer.setAttribute("id", "todo-list-container");
leftContainer.appendChild(projectListContainer);

// ---- Container for each Project ----
const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
projectListContainer.appendChild(todoList);

// ---- Default Project item container ----
const defaultProject = document.createElement("div");
defaultProject.classList.add("todo-list-item");
todoList.appendChild(defaultProject);

// ---- Default Project text ----
const defaultProjectText = document.createElement("div");
defaultProjectText.classList.add("todo-list-item-text");
defaultProjectText.textContent = "Default Project";
defaultProject.appendChild(defaultProjectText);

// ---- Number of Default Project todos ----
const defaultProjectAmount = document.createElement("div");
defaultProjectAmount.classList.add("todo-list-item-amount");
defaultProjectAmount.setAttribute("id", "default-project-amount");
defaultProjectAmount.textContent = "0";
defaultProject.appendChild(defaultProjectAmount);

defaultProject.addEventListener("click", showDefaultProjectList);

// ---- Bottom container with buttons to add todo/project ----
const bottomTodoContainer = document.createElement("div");
bottomTodoContainer.setAttribute("id", "bottom-todo-container");
leftContainer.appendChild(bottomTodoContainer);

const addNewTodo = document.createElement("div");
addNewTodo.setAttribute("id", "add-new-todo");
addNewTodo.textContent = "+ New Todo";
bottomTodoContainer.appendChild(addNewTodo);

addNewTodo.addEventListener("click", newForm);


// ---- MAIN CONTAINER ----
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = defaultProjectText.textContent.toUpperCase();
mainContainer.appendChild(mainContainerTitle);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
mainContainer.appendChild(todosContainer);

// ---- NEW TODOS CONTAINER ----
const newTodoBG = document.createElement("div");
newTodoBG.setAttribute("id", "new-todo-bg");
document.body.appendChild(newTodoBG);

const newTodoContainer = document.createElement("div");
newTodoContainer.setAttribute("id", "new-todo-container");
document.body.appendChild(newTodoContainer);