import './style.css';
import './left.css';
import './main.css';
import './new.css';
import { newForm } from './new-todo-form';
import { newProjectForm } from './new-project-form';
import { projectsArray } from './new-project-form';

const defaultProject = [];

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
const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
projectListContainer.appendChild(todoList);

const projectListItem = document.createElement("div");
projectListItem.classList.add("project-list-item");
todoList.appendChild(projectListItem);

// ---- Project text ----
const projectText = document.createElement("div");
projectText.classList.add("project-text");
projectText.textContent = "0";
projectListItem.appendChild(projectText);

// ---- Number of Project todos ----
const projectAmount = document.createElement("div");
projectAmount.classList.add("project-amount");
projectAmount.textContent = "0";
projectListItem.appendChild(projectAmount);


// ---- Bottom container with buttons to add todo/project ----
const bottomTodoContainer = document.createElement("div");
bottomTodoContainer.setAttribute("id", "bottom-todo-container");
leftContainer.appendChild(bottomTodoContainer);

const addNewTodo = document.createElement("div");
addNewTodo.setAttribute("id", "add-new-todo");
addNewTodo.textContent = "+ New Todo";
bottomTodoContainer.appendChild(addNewTodo);

const addNewProject = document.createElement("div");
addNewProject.setAttribute("id", "add-new-project");
addNewProject.textContent = "+ New Project";
bottomTodoContainer.appendChild(addNewProject);

addNewTodo.addEventListener("click", newForm);

addNewProject.addEventListener("click", newProjectForm);


// ---- MAIN CONTAINER ----
const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = projectsArray[0].title;
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

export { defaultProject };