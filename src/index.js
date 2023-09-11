import './style.css';
import './left.css';
import './main.css';
import './new.css';
import { newForm } from './new-todo-form';
import { newProjectForm } from './new-project-form';

const defaultProject = [];
defaultProject.textContent = "Default Project";
console.log(defaultProject);

const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0");
document.head.appendChild(link);

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");
document.body.appendChild(navBar);

const navBarTitle = document.createElement("div");
navBarTitle.setAttribute("id", "nav-bar-title");
navBarTitle.textContent = "Todo App";
navBar.appendChild(navBarTitle);

const menuIcon = document.createElement("class");
menuIcon.setAttribute("id", "menu-icon");
menuIcon.classList.add("id", "material-symbols-outlined");
menuIcon.textContent = "menu";
navBar.appendChild(menuIcon);

const closeMenuBtn = document.createElement("class");
closeMenuBtn.classList.add("id", "material-symbols-outlined");
closeMenuBtn.setAttribute("id", "close-menu-button");
closeMenuBtn.textContent = "close";

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
const defaultProjectContainer = document.createElement("div");
defaultProjectContainer.setAttribute("id", "default-project-container");
projectListContainer.appendChild(defaultProjectContainer);

const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
projectListContainer.appendChild(todoList);

// ---- Project text ----
const projectText = document.createElement("div");
projectText.classList.add("project-text");
projectText.textContent = defaultProject.textContent;
defaultProjectContainer.appendChild(projectText);

// ---- Number of Project todos ----
const projectAmount = document.createElement("div");
projectAmount.classList.add("project-amount");

const updateDefaultProjectAmount = () => {
  projectAmount.textContent = defaultProject.length;
};

updateDefaultProjectAmount();
defaultProjectContainer.appendChild(projectAmount);

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");
leftContainer.appendChild(buttonsContainer);

const addNewTodo = document.createElement("div");
addNewTodo.classList.add("add-new-todo");
addNewTodo.textContent = "+ New Todo";
buttonsContainer.appendChild(addNewTodo);

const addNewProject = document.createElement("div");
addNewProject.classList.add("add-new-project");
addNewProject.textContent = "+ New Project";
buttonsContainer.appendChild(addNewProject);

addNewTodo.addEventListener("click", newForm);

addNewProject.addEventListener("click", newProjectForm);


// ---- MAIN CONTAINER ----
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainTodoContainer = document.createElement("div");
mainTodoContainer.setAttribute("id", "main-todo-container");
mainContainer.appendChild(mainTodoContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = defaultProject.textContent;
mainTodoContainer.appendChild(mainContainerTitle);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
mainTodoContainer.appendChild(todosContainer);

const bottomButtonsContainer = document.createElement("div");
bottomButtonsContainer.classList.add("bottom-buttons-container");
mainContainer.appendChild(bottomButtonsContainer);

const addNewTodoBottom = document.createElement("div");
addNewTodoBottom.classList.add("add-new-todo");
addNewTodoBottom.textContent = "+ New Todo";
bottomButtonsContainer.appendChild(addNewTodoBottom);

const addNewProjectBottom = document.createElement("div");
addNewProjectBottom.classList.add("add-new-project");
addNewProjectBottom.textContent = "+ New Project";
bottomButtonsContainer.appendChild(addNewProjectBottom);

addNewTodoBottom.addEventListener("click", newForm);

addNewProjectBottom.addEventListener("click", newProjectForm);

// ---- NEW TODOS CONTAINER ----
const newTodoBG = document.createElement("div");
newTodoBG.setAttribute("id", "new-todo-bg");
document.body.appendChild(newTodoBG);

const newTodoContainer = document.createElement("div");
newTodoContainer.setAttribute("id", "new-todo-container");
document.body.appendChild(newTodoContainer);

const openLeftContainer = () => {
  navBar.appendChild(closeMenuBtn);
  navBar.removeChild(menuIcon);
  leftContainer.setAttribute("style", "display: flex");
  mainContainer.setAttribute("style", "display: none");
};

const closeMenu = () => {
  navBar.removeChild(closeMenuBtn);
  navBar.appendChild(menuIcon);
  mainContainer.removeAttribute("style", "display: none");
  leftContainer.removeAttribute("style", "display: flex");
};

closeMenuBtn.addEventListener("click", closeMenu);

menuIcon.addEventListener("click", openLeftContainer);

export { defaultProject, updateDefaultProjectAmount };