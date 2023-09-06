import { defaultProjectArray } from "./new-todo-form";
import { newTodoContainer } from ".";
import { displayEmptyToDoList } from ".";

const resetContainers = () => {
  newTodoContainer.innerHTML = "";
  displayEmptyToDoList();
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
}

const showDefaultProjectList = () => {
  resetContainers();
  defaultProjectArray.sort((dd1, dd2) => (dd1.dueDate > dd2.dueDate) ? 1 : (dd1.dueDate < dd2.dueDate) ? -1 : 0);

  for (let i = 0; i < defaultProjectArray.length; i++) {
    const todosContainer = document.querySelector("#todos-container");
    const todoItemContainer = document.createElement("div");
    todoItemContainer.classList.add("todo-item");
    todoItemContainer.setAttribute("data-todo-id", i);
    todosContainer.appendChild(todoItemContainer);
    const todoItem = document.createElement("div");
    todoItem.classList.add("item-title");
    todoItem.textContent = defaultProjectArray[i].title;
    todoItemContainer.appendChild(todoItem);
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
      const toDoItemTitle = document.createElement("div");
      toDoItemTitle.setAttribute("id", "new-todo-item-title");
      toDoItemTitle.textContent = todoItemInArray.title;
      toDoItemContainer.appendChild(toDoItemTitle);
      const toDoItemDueDate = document.createElement("div");
      toDoItemDueDate.setAttribute("id", "new-todo-item-due-date");
      toDoItemDueDate.textContent = todoItemInArray.dueDate;
      toDoItemContainer.appendChild(toDoItemDueDate);
      const toDoItemDescription = document.createElement("div");
      toDoItemDescription.textContent = todoItemInArray.description;
      toDoItemContainer.appendChild(toDoItemDescription);
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