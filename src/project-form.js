const addProjectForm = () => {
  const container = document.querySelector("#container");

  const form = document.createElement("form");
  form.setAttribute("id", "form");
  container.appendChild(form);

  const projectTitle = document.createElement("input");
  form.appendChild(projectTitle);
};

export { addProjectForm };