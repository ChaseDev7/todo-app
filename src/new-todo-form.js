import { showDefaultProjectList } from "./projects";
import { defaultProjectArrayLength } from "./projects";

const defaultProjectArray = [];

function Todo(title, description, dueDate) {
  return { title, description, dueDate };
};

const closeNewToDoForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  const todoForm = document.querySelector("#form");
  const emptyToDoList = document.createElement("div");
  emptyToDoList.setAttribute("id", "empty-todo");
  emptyToDoList.textContent = "No todo item selected.";
  const closeButton = document.querySelector("#new-form-close-btn");
  const submitToDoFormButton = document.querySelector("#submit-todo-button");
  newTodoContainer.removeChild(todoForm);
  newTodoContainer.appendChild(emptyToDoList);
  newTodoContainer.removeChild(closeButton);
  newTodoContainer.removeChild(submitToDoFormButton);
};

const newForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  newTodoContainer.innerHTML = "";
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "form");
  todoForm.textContent = "NEW TODO";
  newTodoContainer.appendChild(todoForm);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("id", "new-form-close-btn");
  closeButton.textContent = "X";
  newTodoContainer.appendChild(closeButton);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(titleFieldset);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.setAttribute("required", "");
  titleLabel.textContent = "Title:";
  titleFieldset.appendChild(titleLabel);

  const title = document.createElement("input");
  title.setAttribute("id", "title-input");
  titleFieldset.appendChild(title);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(descriptionFieldset);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description-textarea");
  descriptionLabel.textContent = "Description:";
  descriptionFieldset.appendChild(descriptionLabel);

  const description = document.createElement("textarea");
  description.setAttribute("id", "description-textarea");
  descriptionFieldset.appendChild(description);

  const dueDateFieldset = document.createElement("fieldset");
  dueDateFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(dueDateFieldset);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date:";
  dueDateFieldset.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("id", "due-date");
  dueDate.setAttribute("type", "date");
  dueDateFieldset.appendChild(dueDate);

  const priorityFieldset = document.createElement("fieldset");
  priorityFieldset.classList.add("todo-fieldset");
  priorityFieldset.setAttribute("id", "priority-fieldset");
  todoForm.appendChild(priorityFieldset);

  const priorityLegend = document.createElement("legend");
  priorityLegend.setAttribute("for", "priority-fieldset");
  priorityLegend.textContent = "Priority:";
  priorityFieldset.appendChild(priorityLegend);

  const lowPriorityOption = document.createElement("input");
  lowPriorityOption.setAttribute("type", "radio");
  lowPriorityOption.classList.add("priority-option");
  lowPriorityOption.setAttribute("name", "priority-option");
  lowPriorityOption.setAttribute("id", "low-priority");
  priorityFieldset.appendChild(lowPriorityOption);

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.setAttribute("for", "low-priority");
  lowPriorityLabel.textContent = "Low";
  priorityFieldset.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("name", "priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  priorityFieldset.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.textContent = "High";
  priorityFieldset.appendChild(highPriorityLabel);

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "button");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("form", "form");
  submitToDoFormButton.setAttribute("value", "SUBMIT TODO");
  newTodoContainer.appendChild(submitToDoFormButton);

  submitToDoFormButton.addEventListener("click", addTodoIntoList);

  closeButton.addEventListener("click", closeNewToDoForm);
};

const addTodoIntoList = () => {
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#due-date").value;

  const newTodo = Todo(title, description, dueDate);
  defaultProjectArray.push(newTodo);
  console.log(defaultProjectArray);

  closeNewToDoForm();
  showDefaultProjectList();
  defaultProjectArrayLength();
};


export { newForm, defaultProjectArray };