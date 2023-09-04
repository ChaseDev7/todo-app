import './style.css';

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const todoListContainer = document.createElement("div");
todoListContainer.setAttribute("id", "todo-list-container");
container.appendChild(todoListContainer);

const todoListTitle = document.createElement("div");
todoListTitle.setAttribute("id", "todo-list-title");
todoListTitle.textContent = "TO-DO LISTS"
todoListContainer.appendChild(todoListTitle);

const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
todoListContainer.appendChild(todoList);

const todoListAll = document.createElement("div");
todoListAll.classList.add("todo-list-item");
todoList.appendChild(todoListAll);

const todoListAllText = document.createElement("div");
todoListAllText.classList.add("todo-list-item-text");
todoListAllText.textContent = "ALL";
todoListAll.appendChild(todoListAllText);

const todoListAllAmount = document.createElement("div");
todoListAllAmount.classList.add("todo-list-item-amount");
todoListAllAmount.textContent = "0";
todoListAll.appendChild(todoListAllAmount);

const todoListWork = document.createElement("div");
todoListWork.classList.add("todo-list-item");
todoList.appendChild(todoListWork);

const todoListWorkText = document.createElement("div");
todoListWorkText.classList.add("todo-list-item-text");
todoListWorkText.textContent = "WORK";
todoListWork.appendChild(todoListWorkText);

const todoListWorkAmount = document.createElement("div");
todoListWorkAmount.classList.add("todo-list-item-amount");
todoListWorkAmount.textContent = "5";
todoListWork.appendChild(todoListWorkAmount);

