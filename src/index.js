import './style.css';
import { addProjectForm } from './new-project-form';
import { addTodoForm } from "./new-todo-form";
import { updateProjectList } from './show-todo-list';

const link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0");
document.head.appendChild(link);

const projectListArray = [];
projectListArray.textContent = "Project List";

const defaultProject = [];
defaultProject.textContent = "Default Project";
projectListArray.push(defaultProject);

const libraryApp = [];
libraryApp.textContent = "Library App";
projectListArray.push(libraryApp);

const restaurantPage = [];
restaurantPage.textContent = "Restaurant Page";
projectListArray.push(restaurantPage);

const todoItemOne = {
  title: "New todo", 
  description: "Things to read", 
  dueDate: "2023-09-19", 
  lowPriority: false, 
  highPriority: true
};

const todoItemTwo = {
  title: "Add edit button", 
  description: "Need to add button in order to edit details!", 
  dueDate: "2023-09-30",
  lowPriority: true, 
  highPriority: false
};

const todoItemThree = {
  title: "Clean tables", 
  description: "The restaurant is busy at night.", 
  dueDate: "2023-10-07", 
  lowPriority: true, 
  highPriority: false
};

const todoItemFour = {
  title: "Finish Project", 
  description: "These are details of the todo you selected. This description is longer than others, in order to expand the container.", 
  dueDate: "2023-09-27",
  lowPriority: true, 
  highPriority: false
};

defaultProject.push(todoItemOne);
defaultProject.push(todoItemTwo);
restaurantPage.push(todoItemThree);
defaultProject.push(todoItemFour);

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");
navBar.textContent = "Todo App";
document.body.appendChild(navBar);

const leftNavBar = document.createElement("div");
leftNavBar.setAttribute("id", "left-nav-bar");
navBar.appendChild(leftNavBar);

const rightNavBar = document.createElement("div");
rightNavBar.setAttribute("id", "right-nav-bar");
navBar.appendChild(rightNavBar);

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

const projectList = document.createElement("div");
projectList.setAttribute("id", "project-list");
leftContainer.appendChild(projectList);

updateProjectList();

const rightContainer = document.createElement("div");
rightContainer.setAttribute("id", "right-container");
container.appendChild(rightContainer);

const addTodoButton = document.createElement("button");
addTodoButton.setAttribute("id", "add-todo-button");
addTodoButton.textContent = "Add Todo";
rightContainer.appendChild(addTodoButton);

addTodoButton.addEventListener("click", addTodoForm);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
rightContainer.appendChild(todosContainer);

const newProjectButton = document.createElement("button");
newProjectButton.setAttribute("id", "new-project-button");
newProjectButton.textContent = "Add Project";
rightNavBar.appendChild(newProjectButton);

newProjectButton.addEventListener("click", addProjectForm);

export { defaultProject, projectListArray };