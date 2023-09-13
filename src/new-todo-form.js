import { defaultProject } from ".";
import { updateDefaultProjectAmount } from ".";
import { showDefaultProjectTodos } from "./projects";
import { showTodoItem } from "./show-todo";
import { showProjectsList } from "./projects";
import { projectListArray } from "./new-project-form";
import './new.css';

function Todo(newTitle, newDescription, newDueDate, lowPriority, highPriority ) {
  return { newTitle, newDescription, newDueDate, lowPriority, highPriority };
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
  closeButton.classList.add("material-symbols-outlined");
  closeButton.setAttribute("id", "close-button");
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
  lowPriorityLabel.textContent = "LOW";
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
  highPriorityLabel.textContent = "HIGH";
  priorityFieldset.appendChild(highPriorityLabel);
  
  const projectLabel = document.createElement("div");
  projectLabel.setAttribute("id", "select-project-label");
  projectLabel.textContent = "Choose Project to add Todo:";
  todoForm.appendChild(projectLabel);

  const projectFieldset = document.createElement("fieldset");
  projectFieldset.setAttribute("id", "project-fieldset");
  todoForm.appendChild(projectFieldset);

  const defaultProjectRadio = document.createElement("input");
  defaultProjectRadio.setAttribute("type", "radio");
  defaultProjectRadio.setAttribute("id", "default-project-name");
  defaultProjectRadio.setAttribute("name", "project-name");
  defaultProjectRadio.setAttribute("checked", "");
  projectFieldset.appendChild(defaultProjectRadio);

  const defaultProjectLabel = document.createElement("label");
  defaultProjectLabel.setAttribute("for", "default-project-name");
  defaultProjectLabel.setAttribute("id", "default-project-label");
  defaultProjectLabel.textContent = defaultProject.textContent;
  projectFieldset.appendChild(defaultProjectLabel);
  
  for (let i = 0; i < projectListArray.length; i++) {
    const newProjectRadio = document.createElement("input");
    newProjectRadio.setAttribute("type", "radio");
    newProjectRadio.classList.add("project-name");
    newProjectRadio.setAttribute("name", "project-name");
    newProjectRadio.setAttribute("id", `project-index-${i}`);
    newProjectRadio.setAttribute("value", `project-index-${i}`);
    newProjectRadio.setAttribute("data-project-id", i);
    projectFieldset.appendChild(newProjectRadio);

    const newProjectLabel = document.createElement("label");
    newProjectLabel.setAttribute("for", `project-index-${i}`);
    newProjectLabel.classList.add("project-label");
    newProjectLabel.textContent = projectListArray[i].textContent;
    projectFieldset.appendChild(newProjectLabel);
  };

  const submitToDoFormButton = document.createElement("input");
  submitToDoFormButton.setAttribute("type", "submit");
  submitToDoFormButton.setAttribute("id", "submit-todo-button");
  submitToDoFormButton.setAttribute("value", "Complete Todo");
  todoForm.appendChild(submitToDoFormButton);

  const addTodoToList = (event) => {
    event.preventDefault();

    const newTitle = document.querySelector("#title-input").value;
    const newDescription = document.querySelector("#description-textarea").value;
    const newDueDate = document.querySelector("#due-date").value;
    const lowPriority = document.querySelector("#low-priority").checked;
    const highPriority = document.querySelector("#high-priority").checked;
  
    const newTodo = Todo(newTitle, newDescription, newDueDate, lowPriority, highPriority);

    if (defaultProjectRadio.checked == true) {
      defaultProject.push(newTodo);
      console.log(newTodo);
    }

    for (let i = 0; i < projectListArray.length; i++) {
      const newProjectRadio = document.querySelectorAll(".project-name");
      if (newProjectRadio[i].checked == true) {
        projectListArray[i].push(newTodo);
      };
    };

    closeNewToDoForm();
    showDefaultProjectTodos();
    updateDefaultProjectAmount();
    showTodoItem();
  };

  submitToDoFormButton.addEventListener("click", addTodoToList);

  closeButton.addEventListener("click", closeNewToDoForm);
};

export { newForm };