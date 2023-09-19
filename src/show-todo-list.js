import { projectListArray } from ".";

const updateProjectList = () => {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  
  for (let i = 0; i < projectListArray.length; i++) {
    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item");
    projectListItem.setAttribute("data-project-id", i);
    projectListItem.textContent = projectListArray[i].textContent.toUpperCase();
    projectList.appendChild(projectListItem);
  };

  const projectListItem = document.querySelectorAll(".project-list-item");

  projectListItem.forEach((project) => {
    project.addEventListener("click", function showTodosFromProject () {
      const todosContainer = document.querySelector("#todos-container");
      todosContainer.innerHTML = "";

      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
      todoItem.textContent = "First todo item";
      todosContainer.appendChild(todoItem);

      const selectedProject = projectListArray[project.dataset.projectId];

      for (let i = 0; i < selectedProject.length; i++) {
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoItem.textContent = selectedProject[i].title;
        todosContainer.appendChild(todoItem);
      };
    });
  });
};

export { updateProjectList };