import { todoListArray } from "./new-todo-form";

const showTodoList = () => {
  const todosContainer = document.querySelector("#todos-container");
  const toDoItem = document.createElement("div");
  toDoItem.classList.add("todo-item");
  toDoItem.textContent = todoListArray[0].title;
  todosContainer.appendChild(toDoItem);
  const itemDueDate = document.createElement("div");
  itemDueDate.textContent = todoListArray[0].dueDate;
  toDoItem.appendChild(itemDueDate);
}

const todoListArrayLength = () => {
  const listAmount = document.querySelector("#todo-list-all-amount");
  const todoListLength = todoListArray.length;
  listAmount.textContent = todoListLength;
}

export { showTodoList, todoListArrayLength };