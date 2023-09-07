import { showDefaultProjectList } from "./projects";
import { defaultProjectArrayLength } from "./projects";

const defaultProjectArray = [];

function Todo(title, description, dueDate, lowPriority, highPriority) {
  return { title, description, dueDate, lowPriority, highPriority };
};

const closeNewToDoForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  const todoForm = document.querySelector("#form");
  const emptyToDoList = document.createElement("div");
  emptyToDoList.setAttribute("id", "empty-todo");
  emptyToDoList.textContent = "No todo item selected.";
  const closeButton = document.querySelector("#new-form-close-btn");
  newTodoContainer.removeChild(todoForm);
  newTodoContainer.appendChild(emptyToDoList);
  newTodoContainer.removeChild(closeButton);
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

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.setAttribute("required", "");
  titleLabel.textContent = "Title:";
  todoForm.appendChild(titleLabel);

  const title = document.createElement("input");
  title.setAttribute("id", "title-input");
  title.setAttribute("type", "text");
  title.setAttribute("valueMissing", "false");
  title.setAttribute("required", "");
  todoForm.appendChild(title);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description-textarea");
  descriptionLabel.textContent = "Description:";
  todoForm.appendChild(descriptionLabel);

  const description = document.createElement("textarea");
  description.setAttribute("id", "description-textarea");
  description.setAttribute("required", "");
  todoForm.appendChild(description);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "due-date");
  dueDateLabel.textContent = "Due Date:";
  todoForm.appendChild(dueDateLabel);

  const dueDate = document.createElement("input");
  dueDate.setAttribute("id", "due-date");
  dueDate.setAttribute("type", "date");
  dueDate.setAttribute("required", "");
  todoForm.appendChild(dueDate);

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
  lowPriorityOption.setAttribute("value", "low-priority");
  lowPriorityOption.setAttribute("checked", "");
  priorityFieldset.appendChild(lowPriorityOption);

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.setAttribute("for", "low-priority");
  lowPriorityLabel.setAttribute("id", "low-priority-label");
  lowPriorityLabel.textContent = "Low";
  priorityFieldset.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("name", "priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  highPriorityOption.setAttribute("value", "high-priority");
  priorityFieldset.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.setAttribute("id", "high-priority-label");
  highPriorityLabel.textContent = "High";
  priorityFieldset.appendChild(highPriorityLabel);

  const projectSelectLabel = document.createElement("label");
  projectSelectLabel.setAttribute("for", "project-selector");
  projectSelectLabel.setAttribute("id", "project-selector-label");
  projectSelectLabel.textContent = "Choose Project for todo:";
  todoForm.appendChild(projectSelectLabel);

  const projectSelector = document.createElement("select");
  projectSelector.setAttribute("id", "project-selector");
  todoForm.appendChild(projectSelector);

  const defaultProjectSelector = document.createElement("option");
  defaultProjectSelector.setAttribute("value", "default-project");
  defaultProjectSelector.classList.add("selector-option");
  defaultProjectSelector.textContent = "Default Project";
  projectSelector.appendChild(defaultProjectSelector);

  const libraryAppSelector = document.createElement("option");
  libraryAppSelector.setAttribute("value", "library-app");
  libraryAppSelector.classList.add("selector-option");
  libraryAppSelector.textContent = "Library App";
  projectSelector.appendChild(libraryAppSelector);

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "submit");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("value", "SUBMIT TODO");
  todoForm.appendChild(submitToDoFormButton);

  submitToDoFormButton.addEventListener("click", addTodoIntoList);

  closeButton.addEventListener("click", closeNewToDoForm);
};

const addTodoIntoList = (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#due-date").value;
  const lowPriority = document.querySelector("#low-priority").checked;
  const highPriority = document.querySelector("#high-priority").checked;

  const newTodo = Todo(title, description, dueDate, lowPriority, highPriority);
  defaultProjectArray.push(newTodo);
  console.log(defaultProjectArray);
  closeNewToDoForm();
  showDefaultProjectList();
  defaultProjectArrayLength();
};


export { newForm, defaultProjectArray };