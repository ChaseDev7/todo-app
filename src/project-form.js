import { projectListArray } from ".";
import { updateProjectList } from ".";

const project = [];

const addProjectForm = () => {
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  document.body.appendChild(formBackground);

  const newProjectForm = document.createElement("form");
  newProjectForm.setAttribute("id", "new-project-form");
  formBackground.appendChild(newProjectForm);

  const projectTitle = document.createElement("input");
  projectTitle.setAttribute("id", "project-title");
  projectTitle.setAttribute("placeholder", "Enter Project Title");
  newProjectForm.appendChild(projectTitle);

  const submitProjectButton = document.createElement("button");
  submitProjectButton.setAttribute("id", "submit-project-button");
  submitProjectButton.textContent = "Submit Project";
  newProjectForm.appendChild(submitProjectButton);

  submitProjectButton.addEventListener("click", submitProjectForm);
};

const submitProjectForm = (event) => {
  event.preventDefault();

  const formBackground = document.querySelector(".form-background");
  
  const title = document.querySelector("#project-title").value;

  const newProjectArray = project.slice();
  newProjectArray.textContent = title;
  console.log(newProjectArray);
  projectListArray.push(newProjectArray);

  document.body.removeChild(formBackground);
  updateProjectList();
};

export { addProjectForm, submitProjectForm };