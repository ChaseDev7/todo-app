import { todoListArray } from "./new-todo-form";

const showTodoList = () => {
  const todosContainer = document.querySelector("#todos-container");
  todosContainer.innerHTML = "";
  todoListArray.sort();
  console.log(todoListArray);

  for (let i = 0; i < todoListArray.length; i++) {
    const toDoItem = document.createElement("div");
    toDoItem.classList.add("todo-item");
    toDoItem.textContent = todoListArray[i].title;
    todosContainer.appendChild(toDoItem);
    const itemDueDate = document.createElement("div");
    itemDueDate.classList.add("item-due-date");
    itemDueDate.textContent = todoListArray[i].dueDate;
    toDoItem.appendChild(itemDueDate);
  };
};

const todoListArrayLength = () => {
  const listAmount = document.querySelector("#todo-list-all-amount");
  const todoListLength = todoListArray.length;
  listAmount.textContent = todoListLength;
};

export { showTodoList, todoListArrayLength };