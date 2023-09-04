const newForm = () => {
  const newTodoContainer = document.querySelector("#new-todo-container");
  newTodoContainer.innerHTML = "";
  const todoForm = document.createElement("form");
  todoForm.setAttribute("id", "form");
  todoForm.textContent = "NEW TODO";
  newTodoContainer.appendChild(todoForm);

  const titleFieldset = document.createElement("fieldset");
  titleFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(titleFieldset);

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title-input");
  titleLabel.textContent = "Title:";
  titleFieldset.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.setAttribute("id", "title-input");
  titleFieldset.appendChild(titleInput);

  const descriptionFieldset = document.createElement("fieldset");
  descriptionFieldset.classList.add("todo-fieldset");
  todoForm.appendChild(descriptionFieldset);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description-textarea");
  descriptionLabel.textContent = "Description:";
  descriptionFieldset.appendChild(descriptionLabel);

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.setAttribute("id", "description-textarea");
  descriptionFieldset.appendChild(descriptionTextarea);

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
  lowPriorityLabel.textContent = "Not Important";
  priorityFieldset.appendChild(lowPriorityLabel);

  const highPriorityOption = document.createElement("input");
  highPriorityOption.setAttribute("type", "radio");
  highPriorityOption.classList.add("priority-option");
  highPriorityOption.setAttribute("name", "priority-option");
  highPriorityOption.setAttribute("id", "high-priority");
  priorityFieldset.appendChild(highPriorityOption);

  const highPriorityLabel = document.createElement("label");
  highPriorityLabel.setAttribute("for", "high-priority");
  highPriorityLabel.textContent = "Important";
  priorityFieldset.appendChild(highPriorityLabel);

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "button");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("value", "SUBMIT TODO");
  todoForm.appendChild(submitToDoFormButton);
}

export { newForm };