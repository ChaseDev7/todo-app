import './style.css';
import { newForm } from './new-todo-form';

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.appendChild(container);

const leftContainer = document.createElement("div");
leftContainer.setAttribute("id", "left-container");
container.appendChild(leftContainer);

const todoListContainer = document.createElement("div");
todoListContainer.setAttribute("id", "todo-list-container");
leftContainer.appendChild(todoListContainer);

const todoListTitle = document.createElement("div");
todoListTitle.setAttribute("id", "todo-list-title");
todoListTitle.textContent = "TODO LISTS";
todoListContainer.appendChild(todoListTitle);

const todoList = document.createElement("div");
todoList.setAttribute("id", "todo-list");
todoListContainer.appendChild(todoList);

const todoListAll = document.createElement("div");
todoListAll.classList.add("todo-list-item");
todoList.appendChild(todoListAll);

const todoListAllText = document.createElement("div");
todoListAllText.classList.add("todo-list-item-text");
todoListAllText.textContent = "All";
todoListAll.appendChild(todoListAllText);

const todoListAllAmount = document.createElement("div");
todoListAllAmount.classList.add("todo-list-item-amount");
todoListAllAmount.textContent = "0";
todoListAll.appendChild(todoListAllAmount);

const todoListPersonal = document.createElement("div");
todoListPersonal.classList.add("todo-list-item");
todoList.appendChild(todoListPersonal);

const todoListPersonalText = document.createElement("div");
todoListPersonalText.classList.add("todo-list-item-text");
todoListPersonalText.textContent = "Personal";
todoListPersonal.appendChild(todoListPersonalText);

const todoListPersonalAmount = document.createElement("div");
todoListPersonalAmount.classList.add("todo-list-item-amount");
todoListPersonalAmount.textContent = "2";
todoListPersonal.appendChild(todoListPersonalAmount);

const todoListWork = document.createElement("div");
todoListWork.classList.add("todo-list-item");
todoList.appendChild(todoListWork);

const todoListWorkText = document.createElement("div");
todoListWorkText.classList.add("todo-list-item-text");
todoListWorkText.textContent = "Work";
todoListWork.appendChild(todoListWorkText);

const todoListWorkAmount = document.createElement("div");
todoListWorkAmount.classList.add("todo-list-item-amount");
todoListWorkAmount.textContent = "5";
todoListWork.appendChild(todoListWorkAmount);

const bottomTodoContainer = document.createElement("div");
bottomTodoContainer.setAttribute("id", "bottom-todo-container");
leftContainer.appendChild(bottomTodoContainer);

const addNewTodo = document.createElement("div");
addNewTodo.setAttribute("id", "add-new-todo");
addNewTodo.textContent = "+ New Todo";
bottomTodoContainer.appendChild(addNewTodo);

addNewTodo.addEventListener("click", newForm);

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main-container");
container.appendChild(mainContainer);

const mainContainerTitle = document.createElement("div");
mainContainerTitle.setAttribute("id", "main-container-title");
mainContainerTitle.textContent = "ALL";
mainContainer.appendChild(mainContainerTitle);

const newTodoContainer = document.createElement("div");
newTodoContainer.setAttribute("id", "new-todo-container");
container.appendChild(newTodoContainer);

const emptyToDoList = document.createElement("div");
emptyToDoList.setAttribute("id", "empty-todo");
emptyToDoList.textContent = "The list has no todo items.";
newTodoContainer.appendChild(emptyToDoList);