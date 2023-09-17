import './style.css';
import { addProjectForm } from './project-form';
import { addTodoForm } from './new-todo';

const projectListArray = [];
projectListArray.textContent = "Project List";

const defaultProject = [];
defaultProject.textContent = "Default Project";
projectListArray.push(defaultProject);

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

const updateProjectList = () => {
  projectList.innerHTML = "";
  
  for (let i = 0; i < projectListArray.length; i++) {
    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item");
    projectListItem.textContent = projectListArray[i].textContent.toUpperCase();
    projectList.appendChild(projectListItem);
  };
};

updateProjectList();

const rightContainer = document.createElement("div");
rightContainer.setAttribute("id", "right-container");
container.appendChild(rightContainer);

const addTodoButton = document.createElement("button");
addTodoButton.setAttribute("id", "add-todo-button");
addTodoButton.textContent = "Add Todo";
rightContainer.appendChild(addTodoButton);

const todosContainer = document.createElement("div");
todosContainer.setAttribute("id", "todos-container");
rightContainer.appendChild(todosContainer);

const todosList = document.createElement("div");
todosList.setAttribute("id", "todos-list");
todosList.textContent = "CONTENT";
todosContainer.appendChild(todosList);

addTodoButton.addEventListener("click", addTodoForm);

const newProjectButton = document.createElement("button");
newProjectButton.setAttribute("id", "new-project-button");
newProjectButton.textContent = "Add Project";
rightNavBar.appendChild(newProjectButton);

const checkProjects = document.createElement("button");
checkProjects.setAttribute("id", "check-projects-button");
checkProjects.textContent = "Check Project";
rightNavBar.appendChild(checkProjects);

const checkDefaultProject = document.createElement("button");
checkDefaultProject.setAttribute("id", "check-default-project-button");
checkDefaultProject.textContent = "Check Default";
rightNavBar.appendChild(checkDefaultProject);

checkProjects.addEventListener("click", function checkProjectsInList () {
  console.log(projectListArray);
});

checkDefaultProject.addEventListener("click", function checkDefaultProject () {
  console.log(defaultProject);
});

newProjectButton.addEventListener("click", addProjectForm);

export { defaultProject, projectListArray, updateProjectList };