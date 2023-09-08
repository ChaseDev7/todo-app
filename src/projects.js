import { defaultProjectArray } from "./new-todo-form";

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

  const todoItemsInList = document.querySelectorAll(".todo-item");

  todoItemsInList.forEach((todoItem) => {
    todoItem.addEventListener("click", function showToDoItem () {
      const bgForNewTodo = document.querySelector("#new-todo-bg");
      bgForNewTodo.style.display = "flex";
      const containerForNewTodo = document.querySelector("#new-todo-container");
      containerForNewTodo.style.display = "flex";
      containerForNewTodo.innerHTML = "";
      const todoItemInArray = defaultProjectArray[todoItem.dataset.todoId];
      const toDoItemContainer = document.createElement("div");
      toDoItemContainer.setAttribute("id", "new-todo-item-container");
      containerForNewTodo.appendChild(toDoItemContainer);
      const toDoItemTitleContainer = document.createElement("div");
      toDoItemTitleContainer.setAttribute("id", "new-todo-item-title-container");
      toDoItemContainer.appendChild(toDoItemTitleContainer);
      const toDoItemTitle = document.createElement("div");
      toDoItemTitle.setAttribute("id", "new-todo-item-title");
      toDoItemTitle.textContent = todoItemInArray.title;
      toDoItemTitleContainer.appendChild(toDoItemTitle);
      const closeTodoItemBtn = document.createElement("button");
      closeTodoItemBtn.setAttribute("id", "close-todo-item-button");
      closeTodoItemBtn.textContent = "X";
      toDoItemTitleContainer.appendChild(closeTodoItemBtn);
      const toDoItemDueDate = document.createElement("div");
      toDoItemDueDate.setAttribute("id", "new-todo-item-due-date");
      toDoItemDueDate.textContent = `Due date: ${todoItemInArray.dueDate}`;
      toDoItemContainer.appendChild(toDoItemDueDate);
      const toDoItemPriority = document.createElement("div");
      toDoItemPriority.setAttribute("id", "new-todo-item-priority");
      toDoItemPriority.textContent = "Priority: ";
      toDoItemContainer.appendChild(toDoItemPriority);
      const toDoItemDescription = document.createElement("div");
      toDoItemDescription.setAttribute("id", "new-todo-item-description");
      toDoItemDescription.textContent = `Description: ${todoItemInArray.description}`;
      toDoItemContainer.appendChild(toDoItemDescription);

      const resetNewToDoContainer = () => {
        const bgForNewTodo = document.querySelector("#new-todo-bg");
        bgForNewTodo.style.display = "none";
        const containerForNewTodo = document.querySelector("#new-todo-container");
        containerForNewTodo.style.display = "none";
        containerForNewTodo.innerHTML = "";
      };

      closeTodoItemBtn.addEventListener("click", resetNewToDoContainer);
    });
  });
};

const defaultProjectArrayLength = () => {
  const listAmount = document.querySelector("#default-project-amount");
  const defaultProjectListLength = defaultProjectArray.length;
  listAmount.textContent = defaultProjectListLength;
};

export { showDefaultProjectList, defaultProjectArrayLength };