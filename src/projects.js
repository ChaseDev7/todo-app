import { defaultProjectArray } from "./new-todo-form";
import { newTodoContainer } from ".";
import { displayEmptyToDoList } from ".";

const resetContainers = () => {
  newTodoContainer.innerHTML = "";
  displayEmptyToDoList();
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
};

const showDefaultProjectList = () => {
  const mainContainer = document.querySelector("#main-container");
  const currentTodosTitle = document.querySelector("#current-todos-title");
  currentTodosTitle.style.display = "flex";
  resetContainers();
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
      highPriorityContainer.textContent = "HIGH PRIORITY";
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
      const todoItemInArray = defaultProjectArray[todoItem.dataset.todoId];
      newTodoContainer.innerHTML = "";
      const toDoItemContainer = document.createElement("div");
      toDoItemContainer.setAttribute("id", "new-todo-item-container");
      newTodoContainer.appendChild(toDoItemContainer);
      const closeTodoItemBtn = document.createElement("button");
      closeTodoItemBtn.setAttribute("id", "close-todo-item-button");
      closeTodoItemBtn.textContent = "X";
      newTodoContainer.appendChild(closeTodoItemBtn);
      const toDoItemTitle = document.createElement("div");
      toDoItemTitle.setAttribute("id", "new-todo-item-title");
      toDoItemTitle.textContent = todoItemInArray.title;
      toDoItemContainer.appendChild(toDoItemTitle);
      const toDoItemDueDate = document.createElement("div");
      toDoItemDueDate.setAttribute("id", "new-todo-item-due-date");
      toDoItemDueDate.textContent = `Due date: ${todoItemInArray.dueDate}`;
      toDoItemContainer.appendChild(toDoItemDueDate);
      const toDoItemDescription = document.createElement("div");
      toDoItemDescription.setAttribute("id", "new-todo-item-description");
      toDoItemDescription.textContent = todoItemInArray.description;
      toDoItemContainer.appendChild(toDoItemDescription);

      const resetNewToDoContainer = () => {
        newTodoContainer.innerHTML = "";
        displayEmptyToDoList();
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

const showLibraryProjectList = () => {
  resetContainers();
};



export { showDefaultProjectList, defaultProjectArrayLength, showLibraryProjectList };