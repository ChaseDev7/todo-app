import { defaultProjectArray } from "./new-todo-form";
import { showTodoItem } from "./show-todo";

const resetContainers = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "none";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "none";
};

const showDefaultProjectList = () => {
  resetContainers();
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
  defaultProjectArray.sort((dd1, dd2) => (dd1.dueDate > dd2.dueDate) ? 1 : (dd1.dueDate < dd2.dueDate) ? -1 : 0);

  for (let i = 0; i < defaultProjectArray.length; i++) {
    const todosContainer = document.querySelector("#todos-container");
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item");
    todoItemContainer.setAttribute("data-todo-id", i);
    todosContainer.appendChild(todoItemContainer);
    const todoItem = document.createElement("div");
    todoItem.classList.add("item-title-container");
    todoItemContainer.appendChild(todoItem);
    const todoItemTitle = document.createElement("div");
    todoItemTitle.classList.add("item-title");
    todoItemTitle.textContent = defaultProjectArray[i].title;
    todoItem.appendChild(todoItemTitle);
    let itemHighPriority = defaultProjectArray[i].highPriority;
    if (itemHighPriority == true) {
      const highPriorityContainer = document.createElement("div");
      highPriorityContainer.classList.add("high-priority-container");
      highPriorityContainer.textContent = "HIGH";
      todoItem.appendChild(highPriorityContainer);
    };
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-due-date");
    itemDueDate.textContent = defaultProjectArray[i].dueDate;
    todoItemContainer.appendChild(itemDueDate);
  };

  showTodoItem();
};

const defaultProjectArrayLength = () => {
  const listAmount = document.querySelector("#default-project-amount");
  const defaultProjectListLength = defaultProjectArray.length;
  listAmount.textContent = defaultProjectListLength;
};

export { showDefaultProjectList, defaultProjectArrayLength };