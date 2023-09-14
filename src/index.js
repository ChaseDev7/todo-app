import './style.css';
import { addProjectForm } from './project-form';

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const newProjectButton = document.createElement("button");
newProjectButton.textContent = "Add Project";
container.appendChild(newProjectButton);

newProjectButton.addEventListener("click", addProjectForm);