import { defaultProject } from ".";

const Todo = (title, description, dueDate, lowPriority, highPriority) => {
  return { title, description, dueDate, lowPriority, highPriority };
};

const addTodoForm = () => {
  const formBackground = document.createElement("div");
  formBackground.classList.add("form-background");
  document.body.appendChild(formBackground);

  const newTodoForm = document.createElement("form");
  newTodoForm.setAttribute("id", "new-todo-form");
  formBackground.appendChild(newTodoForm);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.setAttribute("id", "title-fieldset");
  newTodoForm.appendChild(titleFieldset);

  const todoTitle = document.createElement("input");
  todoTitle.setAttribute("id", "todo-title-input");
  todoTitle.setAttribute("type", "text");
  todoTitle.setAttribute("maxlength", "50");
  todoTitle.setAttribute("placeholder", "Title: (max-length: 50 char)");
  todoTitle.required = true;
  titleFieldset.appendChild(todoTitle);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.setAttribute("id", "description-fieldset");
  newTodoForm.appendChild(descriptionFieldset);

  const todoDescription = document.createElement("textarea");
  todoDescription.setAttribute("id", "description-textarea");
  todoDescription.setAttribute("placeholder", "Description:");
  descriptionFieldset.appendChild(todoDescription);

  const dueDateFieldset = document.createElement("fieldset");
  dueDateFieldset.setAttribute("id", "due-date-fieldset");
  newTodoForm.appendChild(dueDateFieldset);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "todo-due-date-input");
  dueDateLabel.setAttribute("id", "due-date-label");
  dueDateLabel.textContent = "Due Date:";
  dueDateFieldset.appendChild(dueDateLabel);

  const todoDueDate = document.createElement("input");
  todoDueDate.setAttribute("id", "todo-due-date-input");
  todoDueDate.setAttribute("type", "date");
  todoDueDate.required = true;
  dueDateFieldset.appendChild(todoDueDate);

  const priorityFieldset = document.createElement("fieldset");
  priorityFieldset.setAttribute("id", "priority-fieldset");
  newTodoForm.appendChild(priorityFieldset);

  const priorityTitle = document.createElement("div");
  priorityTitle.setAttribute("id", "priority-title");
  priorityTitle.textContent = "Priority:";
  priorityFieldset.appendChild(priorityTitle);

  const lowPriorityOption = document.createElement("input");
  lowPriorityOption.setAttribute("type", "radio");
  lowPriorityOption.classList.add("priority-option");
  lowPriorityOption.setAttribute("id", "low-priority");
  lowPriorityOption.setAttribute("checked", "");
  priorityTitle.appendChild(lowPriorityOption);

  const lowPriorityLabel = document.createElement("label");
  lowPriorityLabel.setAttribute("for", "low-priority");
  lowPriorityLabel.setAttribute("id", "low-priority-label");
  lowPriorityLabel.textContent = "LOW";
  priorityTitle.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  priorityTitle.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.setAttribute("id", "high-priority-label");
  highPriorityLabel.textContent = "HIGH";
  priorityTitle.appendChild(highPriorityLabel);

  const submitTodoButton = document.createElement("button");
  submitTodoButton.setAttribute("id", "submit-project-button");
  submitTodoButton.textContent = "Submit Todo";
  newTodoForm.appendChild(submitTodoButton);

  submitTodoButton.addEventListener("click", submitTodoForm);
};

const submitTodoForm = (event) => {
  event.preventDefault();

  const formBackground = document.querySelector(".form-background");

  const title = document.querySelector("#todo-title-input").value;
  const description = document.querySelector("#description-textarea").value;
  const dueDate = document.querySelector("#todo-due-date-input").value;
  const lowPriority = document.querySelector("#low-priority").checked;
  const highPriority = document.querySelector("#high-priority").checked;

  const newTodo = Todo(title, description, dueDate, lowPriority, highPriority);

  defaultProject.push(newTodo);

  document.body.removeChild(formBackground);
};

export { addTodoForm, submitTodoForm };