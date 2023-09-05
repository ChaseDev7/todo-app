import { defaultProjectArray } from "./new-todo-form";

const showDefaultProjectList = () => {
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
  defaultProjectArray.sort((dd1, dd2) => (dd1.dueDate > dd2.dueDate) ? 1 : (dd1.dueDate < dd2.dueDate) ? -1 : 0);

  for (let i = 0; i < defaultProjectArray.length; i++) {
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todo-item");
    toDoItem.setAttribute("data-todo-id", i);
    toDoItem.textContent = defaultProjectArray[i].title;
    todosContainer.appendChild(toDoItem);
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-due-date");
    itemDueDate.textContent = defaultProjectArray[i].dueDate;
    toDoItem.appendChild(itemDueDate);
  };
};

const defaultProjectArrayLength = () => {
  const listAmount = document.querySelector("#default-project-amount");
  const defaultProjectListLength = defaultProjectArray.length;
  listAmount.textContent = defaultProjectListLength;
};

const showLibraryProjectTodos = () => {

};



export { showDefaultProjectList, showLibraryProjectTodos, defaultProjectArrayLength };