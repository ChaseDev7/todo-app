import './style.css';
import { newForm } from './new-todo-form';
import { showDefaultProjectList } from './projects';
import { showLibraryProjectList } from './projects';

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

// --- TITLE for PROJECTS container ----
const projectListTitle = document.createElement("div");
projectListTitle.setAttribute("id", "todo-list-title");
projectListTitle.textContent = "PROJECTS";
projectListContainer.appendChild(projectListTitle);

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

// ---- Library Project item container ----
const libraryProject = document.createElement("div");
libraryProject.classList.add("todo-list-item");
todoList.appendChild(libraryProject);

libraryProject.addEventListener("click", showLibraryProjectList);

// ---- Library Project text ----
const libraryProjectText = document.createElement("div");
libraryProjectText.classList.add("todo-list-item-text");
libraryProjectText.textContent = "Library App";
libraryProject.appendChild(libraryProjectText);

// ---- Number of Library Project todos ----
const libraryProjectAmount = document.createElement("div");
libraryProjectAmount.classList.add("todo-list-item-amount");
libraryProjectAmount.textContent = "0";
libraryProject.appendChild(libraryProjectAmount);

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
mainContainerTitle.textContent = "DEFAULT PROJECT";
mainContainer.appendChild(mainContainerTitle);

const currentTodosTitle = document.createElement("div");
currentTodosTitle.setAttribute("id", "current-todos-title");
currentTodosTitle.textContent = "CURRENT";
mainContainer.appendChild(currentTodosTitle);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
mainContainer.appendChild(todosContainer);

// ---- NEW TODOS CONTAINER ----
const newTodoContainer = document.createElement("div");
newTodoContainer.setAttribute("id", "new-todo-container");
container.appendChild(newTodoContainer);

const displayEmptyToDoList = () => {
  const emptyToDoList = document.createElement("div");
  emptyToDoList.setAttribute("id", "empty-todo");
  emptyToDoList.textContent = "No todo item selected.";
  newTodoContainer.appendChild(emptyToDoList);
}

displayEmptyToDoList();

export { newTodoContainer, displayEmptyToDoList };