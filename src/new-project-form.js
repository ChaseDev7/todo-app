import { showProjectsList } from "./projects";
import './new.css';

const projectListArray = [];
projectListArray.textContent = "Project List";
const newProjectArray = [];

const closeNewProjectForm = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "none";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "none";
  containerForNewTodo.innerHTML = "";
};

const newProjectForm = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "flex";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "flex";

  const newProjectTitleContainer = document.createElement("div");
  newProjectTitleContainer.setAttribute("id", "new-project-title-container");
  containerForNewTodo.appendChild(newProjectTitleContainer);

  const newProjectTitle = document.createElement("div");
  newProjectTitle.setAttribute("id", "new-project-title");
  newProjectTitle.textContent = "NEW PROJECT";
  newProjectTitleContainer.appendChild(newProjectTitle);
  
  const projectForm = document.createElement("form");
  projectForm.setAttribute("id", "project-form");
  containerForNewTodo.appendChild(projectForm);

  const closeButton = document.createElement("class");
  closeButton.classList.add("material-symbols-outlined");
  closeButton.setAttribute("id", "close-button");
  closeButton.textContent = "close";
  newProjectTitleContainer.appendChild(closeButton);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("project-fieldset");
  projectForm.appendChild(titleFieldset);

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.setAttribute("for", "project-title-input");
  projectForm.appendChild(projectTitleLabel);

  const title = document.createElement("input");
  title.setAttribute("id", "project-title-input");
  title.setAttribute("type", "text");
  title.setAttribute("maxlength", "30");
  title.setAttribute("valueMissing", "false");
  title.setAttribute("placeholder", "Title: (max-length: 30 char)");
  title.setAttribute("required", "");
  titleFieldset.appendChild(title);

  const submitProjectButton = document.createElement("input");
  submitProjectButton.setAttribute("type", "submit");
  submitProjectButton.setAttribute("id", "submit-project-button");
  submitProjectButton.setAttribute("value", "Submit Project");
  projectForm.appendChild(submitProjectButton);

  submitProjectButton.addEventListener("click", addProjectToContainer);

  closeButton.addEventListener("click", closeNewProjectForm);
};

const addProjectToContainer = (event) => {
  event.preventDefault();
  const title = document.querySelector("#project-title-input").value;
  const newProject = newProjectArray.slice();
  newProject.textContent = title;
  projectListArray.push(newProject);
  showProjectsList(newProject);
  closeNewProjectForm();
};


export { newProjectForm, addProjectToContainer, projectListArray };