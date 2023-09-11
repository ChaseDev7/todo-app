import './style.css';
import { defaultProject } from ".";
import { showTodoItem } from "./show-todo";
import { updateDefaultProjectAmount } from '.';

const projectList = [];
projectList.textContent = "Project List";

const resetContainers = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "none";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "none";
};

const showDefaultProjectTodos = () => {
  resetContainers();
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
  defaultProject.sort((dd1, dd2) => (dd1.dueDate > dd2.dueDate) ? 1 : (dd1.dueDate < dd2.dueDate) ? -1 : 0);

  const mainContainerTitle = document.querySelector("#main-container-title");
  mainContainerTitle.textContent = defaultProject.textContent.toUpperCase();

  for (let i = 0; i < defaultProject.length; i++) {
    const todosContainer = document.querySelector("#todos-container");
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item");
    todosContainer.appendChild(todoItemContainer);
    const itemTitleContainer = document.createElement("div");
    itemTitleContainer.classList.add("item-title-container");
    itemTitleContainer.setAttribute("data-todo-id", i);
    todoItemContainer.appendChild(itemTitleContainer);
    const todoItemTitle = document.createElement("div");
    todoItemTitle.classList.add("item-title");
    todoItemTitle.textContent = defaultProject[i].title;
    itemTitleContainer.appendChild(todoItemTitle);
    let itemHighPriority = defaultProject[i].highPriority;
    if (itemHighPriority == true) {
      const highPriorityContainer = document.createElement("div");
      highPriorityContainer.classList.add("high-priority-container");
      highPriorityContainer.textContent = "HIGH";
      itemTitleContainer.appendChild(highPriorityContainer);
    };
    const itemDetailsContainer = document.createElement("div");
    itemDetailsContainer.classList.add("item-details-container");
    todoItemContainer.appendChild(itemDetailsContainer);
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-due-date");
    itemDueDate.textContent = defaultProject[i].dueDate;
    itemDetailsContainer.appendChild(itemDueDate);
    const editIcon = document.createElement("class");
    editIcon.setAttribute("id", "edit-icon");
    editIcon.classList.add("id", "material-symbols-outlined");
    editIcon.textContent = "edit";
    itemDetailsContainer.appendChild(editIcon);
    let deleteIcon = document.createElement("class");
    deleteIcon.setAttribute("id", "delete-icon");
    deleteIcon.classList.add("id", "material-symbols-outlined");
    deleteIcon.textContent = "delete";
    itemDetailsContainer.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", deleteTodoItem);

    function deleteTodoItem () {
      defaultProject.splice(itemTitleContainer.dataset.todoId, 1);
      todosContainer.removeChild(todoItemContainer);
      showDefaultProjectTodos();
      console.log(defaultProject);
      updateDefaultProjectAmount();
    };

    showTodoItem();
  };
};

const showNewProjectTodos = () => {
  const projectsInList = document.querySelectorAll(".project-list-item");

  projectsInList.forEach((project) => {
    project.addEventListener("click", function showProjectInMain () {
      const projectTextInArray = projectList[project.dataset.projectTextId];

      const mainContainerTitle = document.querySelector("#main-container-title");
      mainContainerTitle.textContent = "";
      mainContainerTitle.textContent = projectTextInArray.textContent;

      let upperMainTitle = document.createElement("div");
      upperMainTitle = mainContainerTitle.textContent.toUpperCase();
      mainContainerTitle.textContent = upperMainTitle;

      const todosContainer = document.querySelector("#todos-container");
      todosContainer.innerHTML = "";
    });
  });
};

const showProjectsList = () => {
  const newProjectList = document.querySelector("#project-list");
  newProjectList.innerHTML = "";
  for (let i = 0; i < projectList.length; i++) {
    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item");
    projectListItem.setAttribute("data-project-text-id", i);
    newProjectList.appendChild(projectListItem);

    // ---- Project text ----
    const projectText = document.createElement("div");
    projectText.classList.add("project-text");
    projectText.textContent = projectList[i].textContent;
    projectListItem.appendChild(projectText);

    // ---- Number of Project todos ----
    const projectAmount = document.createElement("div");
    projectAmount.classList.add("project-amount");
    projectAmount.textContent = projectList[i].length;
    projectListItem.appendChild(projectAmount);
  };
};

console.log(projectList);

export { showDefaultProjectTodos, showNewProjectTodos, showProjectsList, projectList };