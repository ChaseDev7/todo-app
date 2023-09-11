import { defaultProject } from ".";
import { updateDefaultProjectAmount } from ".";
import { showDefaultProjectTodos } from "./projects";
import { showProjectsList } from "./projects";
import { showTodoItem } from "./show-todo";

function Todo(title, description, dueDate, lowPriority, highPriority) {
  return { title, description, dueDate, lowPriority, highPriority };
};

const closeNewToDoForm = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "none";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "none";
  containerForNewTodo.innerHTML = "";
};

const newForm = () => {
  const bgForNewTodo = document.querySelector("#new-todo-bg");
  bgForNewTodo.style.display = "flex";
  const containerForNewTodo = document.querySelector("#new-todo-container");
  containerForNewTodo.style.display = "flex";

  const newToDoTitleContainer = document.createElement("div");
  newToDoTitleContainer.setAttribute("id", "new-todo-title-container");
  containerForNewTodo.appendChild(newToDoTitleContainer);

  const newToDoTitle = document.createElement("div");
  newToDoTitle.setAttribute("id", "new-todo-title");
  newToDoTitle.textContent = "NEW TODO";
  newToDoTitleContainer.appendChild(newToDoTitle);
  
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "form");
  containerForNewTodo.appendChild(todoForm);

  const closeButton = document.createElement("class");
  closeButton.classList.add("id", "material-symbols-outlined");
  closeButton.textContent = "close";
  newToDoTitleContainer.appendChild(closeButton);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(titleFieldset);

  const title = document.createElement("input");
  title.setAttribute("id", "title-input");
  title.setAttribute("type", "text");
  title.setAttribute("maxlength", "50");
  title.setAttribute("placeholder", "Title: (max-length: 50 char)");
  title.required = true;
  titleFieldset.appendChild(title);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(descriptionFieldset);

  const description = document.createElement("textarea");
  description.setAttribute("id", "description-textarea");
  description.setAttribute("placeholder", "Description:");
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
  dueDate.required = true;
  dueDateFieldset.appendChild(dueDate);

  const priorityFieldset = document.createElement("fieldset");
  priorityFieldset.classList.add("todo-fieldset");
  priorityFieldset.setAttribute("id", "priority-fieldset");
  todoForm.appendChild(priorityFieldset);

  const priorityTitle = document.createElement("div");
  priorityTitle.setAttribute("id", "priority-title");
  priorityTitle.textContent = "Priority:";
  priorityFieldset.appendChild(priorityTitle);

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

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "submit");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("value", "Submit Todo");
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
  defaultProject.push(newTodo);
  closeNewToDoForm();
  showDefaultProjectTodos();
  updateDefaultProjectAmount();
  showProjectsList();
  showTodoItem();
};


export { newForm };