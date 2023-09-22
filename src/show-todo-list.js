import { projectListArray } from ".";
import { format } from 'date-fns';

const updateProjectList = () => {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  
  for (let i = 0; i < projectListArray.length; i++) {
    const projectListItem = document.createElement("div");
    projectListItem.classList.add("project-list-item");
    projectListItem.setAttribute("data-project-id", i);
    projectList.appendChild(projectListItem);

    const projectItemText = document.createElement("div");
    projectItemText.classList.add("project-item-text");
    projectItemText.textContent = projectListArray[i].textContent.toUpperCase();
    projectListItem.appendChild(projectItemText);

    const projectItemAmount = document.createElement("div");
    projectItemAmount.classList.add("project-item-amount");
    projectItemAmount.textContent = projectListArray[i].length;
    projectListItem.appendChild(projectItemAmount);
  };

  const projectListItem = document.querySelectorAll(".project-list-item");

  projectListItem.forEach((project) => {
    project.addEventListener("click", function showTodosFromProject () {
      const selectedProject = projectListArray[project.dataset.projectId];
      selectedProject.sort((dd1, dd2) => (dd1.dueDate > dd2.dueDate) ? 1 : (dd1.dueDate < dd2.dueDate) ? -1 : 0);

      const showTodosList = () => {
        const todosContainer = document.querySelector("#todos-container");
        todosContainer.innerHTML = "";

        for (let i = 0; i < selectedProject.length; i++) {
          let newDueDate = selectedProject[i].dueDate.replace(/-/g, '\/');
          newDueDate = format(new Date(newDueDate), 'PP');

          const todoItem = document.createElement("div");
          todoItem.classList.add("todo-item");
          todoItem.setAttribute("data-todo-id", i);
          todosContainer.appendChild(todoItem);

          const todoItemLeftContainer = document.createElement("div");
          todoItemLeftContainer.classList.add("todo-item-left-container");
          todoItem.appendChild(todoItemLeftContainer);

          todoItemLeftContainer.addEventListener("click", function showTodoItem () {
            const todoBackground = document.createElement("div");
            todoBackground.setAttribute("id", "todo-background");
            document.body.appendChild(todoBackground);
          
            const formContainer = document.createElement("div");
            formContainer.setAttribute("id", "form-container");
            document.body.appendChild(formContainer);
          
            const cancelButtonContainer = document.createElement("div");
            cancelButtonContainer.setAttribute("id", "cancel-project-button-container");
            formContainer.appendChild(cancelButtonContainer);
          
            const exitTodoButton = document.createElement("button");
            exitTodoButton.setAttribute("id", "exit-todo-button");
            exitTodoButton.textContent = "X";
            cancelButtonContainer.appendChild(exitTodoButton);

            exitTodoButton.addEventListener("click", exitTodo);

            const todoDetailsContainer = document.createElement("div");
            todoDetailsContainer.setAttribute("id", "todo-details-container");
            formContainer.appendChild(todoDetailsContainer);
          
            const selectedTodoItemTitle = document.createElement("div");
            selectedTodoItemTitle.setAttribute("id", "selected-todo-item-title");
            selectedTodoItemTitle.textContent = selectedProject[i].title;
            todoDetailsContainer.appendChild(selectedTodoItemTitle);

            const priorityContainer = document.createElement("div");
            priorityContainer.setAttribute("id", "priority-container");
            priorityContainer.textContent = "Priority: ";
            todoDetailsContainer.appendChild(priorityContainer);

            if (selectedProject[i].highPriority == true) {
              const highPriorityContainer = document.createElement("div");
              highPriorityContainer.setAttribute("id", "high-priority-container");
              highPriorityContainer.textContent = "HIGH";
              priorityContainer.appendChild(highPriorityContainer);
            } else if (selectedProject[i].lowPriority == true) {
              const lowPriorityContainer = document.createElement("div");
              lowPriorityContainer.setAttribute("id", "low-priority-container");
              lowPriorityContainer.textContent = "LOW";
              priorityContainer.appendChild(lowPriorityContainer);
            };

            const selectedTodoItemDueDate = document.createElement("div");
            selectedTodoItemDueDate.setAttribute("id", "selected-todo-item-due-date");
            selectedTodoItemDueDate.textContent = `Due date: ${newDueDate}`;
            todoDetailsContainer.appendChild(selectedTodoItemDueDate);

            const selectedTodoItemDescription = document.createElement("div");
            selectedTodoItemDescription.setAttribute("id", "selected-todo-item-description");
            selectedTodoItemDescription.textContent = `Description: ${selectedProject[i].description}`;
            todoDetailsContainer.appendChild(selectedTodoItemDescription);
          });

          const todoItemTitle = document.createElement("div");
          todoItemTitle.classList.add("todo-item-title");
          todoItemTitle.textContent = selectedProject[i].title;
          todoItemLeftContainer.appendChild(todoItemTitle);

          if (selectedProject[i].highPriority == true) {
            const todoItemHighPriority = document.createElement("div");
            todoItemHighPriority.classList.add("todo-item-high-priority");
            todoItemHighPriority.textContent = "HIGH";
            todoItemLeftContainer.appendChild(todoItemHighPriority);
          };

          const todoItemRightContainer = document.createElement("div");
          todoItemRightContainer.classList.add("todo-item-right-container");
          todoItem.appendChild(todoItemRightContainer);

          const itemDueDate = document.createElement("div");
          itemDueDate.classList.add("todo-item-due-date");
          itemDueDate.textContent = newDueDate;
          todoItemRightContainer.appendChild(itemDueDate);

          const editIcon = document.createElement("class");
          editIcon.setAttribute("id", "edit-icon");
          editIcon.classList.add("id", "material-symbols-outlined");
          editIcon.textContent = "edit";
          todoItemRightContainer.appendChild(editIcon);

          editIcon.addEventListener("click", editTodoItem);

          function editTodoItem () {
            const todoBackground = document.createElement("div");
            todoBackground.setAttribute("id", "todo-background");
            document.body.appendChild(todoBackground);
          
            const formContainer = document.createElement("div");
            formContainer.setAttribute("id", "form-container");
            document.body.appendChild(formContainer);
          
            const cancelButtonContainer = document.createElement("div");
            cancelButtonContainer.setAttribute("id", "cancel-project-button-container");
            formContainer.appendChild(cancelButtonContainer);
          
            const exitTodoButton = document.createElement("button");
            exitTodoButton.setAttribute("id", "exit-todo-button");
            exitTodoButton.textContent = "X";
            cancelButtonContainer.appendChild(exitTodoButton);

            exitTodoButton.addEventListener("click", exitTodo);

            const todoDetailsContainer = document.createElement("div");
            todoDetailsContainer.setAttribute("id", "todo-details-container");
            formContainer.appendChild(todoDetailsContainer);

            const selectedTitleLabel = document.createElement("div");
            selectedTitleLabel.setAttribute("id", "selected-title-label");
            selectedTitleLabel.textContent = "Title";
            todoDetailsContainer.appendChild(selectedTitleLabel);
          
            const selectedTodoItemTitle = document.createElement("input");
            selectedTodoItemTitle.setAttribute("id", "selected-title-input");
            selectedTodoItemTitle.value = selectedProject[i].title;
            todoDetailsContainer.appendChild(selectedTodoItemTitle);

            const selectedDueDateLabel = document.createElement("div");
            selectedDueDateLabel.setAttribute("id", "selected-due-date-label");
            selectedDueDateLabel.textContent = "Due Date";
            todoDetailsContainer.appendChild(selectedDueDateLabel);

            const selectedTodoItemDueDate = document.createElement("input");
            selectedTodoItemDueDate.setAttribute("type", "date");
            selectedTodoItemDueDate.setAttribute("id", "selected-due-date-input");
            selectedTodoItemDueDate.value = selectedProject[i].dueDate;
            todoDetailsContainer.appendChild(selectedTodoItemDueDate);

            const selectedDescriptionLabel = document.createElement("div");
            selectedDescriptionLabel.setAttribute("id", "selected-description-label");
            selectedDescriptionLabel.textContent = "Description";
            todoDetailsContainer.appendChild(selectedDescriptionLabel);

            const selectedTodoItemDescription = document.createElement("textarea");
            selectedTodoItemDescription.setAttribute("id", "selected-description-textarea");
            selectedTodoItemDescription.value = selectedProject[i].description;
            todoDetailsContainer.appendChild(selectedTodoItemDescription);

            const selectedPriorityLabel = document.createElement("div");
            selectedPriorityLabel.setAttribute("id", "selected-priority-label");
            selectedPriorityLabel.textContent = "Priority";
            todoDetailsContainer.appendChild(selectedPriorityLabel);

            const selectedLowPriorityLabel = document.createElement("label");
            selectedLowPriorityLabel.setAttribute("id", "low-priority-label");
            selectedLowPriorityLabel.setAttribute("for", "low-priority");
            selectedLowPriorityLabel.textContent = "LOW";
            todoDetailsContainer.appendChild(selectedLowPriorityLabel);

            const selectedTodoItemLowPriority = document.createElement("input");
            selectedTodoItemLowPriority.setAttribute("type", "radio");
            selectedTodoItemLowPriority.setAttribute("id", "low-priority");
            selectedTodoItemLowPriority.classList.add("priority-option");
            selectedTodoItemLowPriority.setAttribute("name", "priority-option");
            selectedTodoItemLowPriority.checked = selectedProject[i].lowPriority;
            todoDetailsContainer.appendChild(selectedTodoItemLowPriority);

            const selectedHighPriorityLabel = document.createElement("label");
            selectedHighPriorityLabel.setAttribute("id", "high-priority-label");
            selectedHighPriorityLabel.setAttribute("for", "high-priority");
            selectedHighPriorityLabel.textContent = "HIGH";
            todoDetailsContainer.appendChild(selectedHighPriorityLabel);

            const selectedTodoItemHighPriority = document.createElement("input");
            selectedTodoItemHighPriority.setAttribute("type", "radio");
            selectedTodoItemHighPriority.setAttribute("id", "high-priority");
            selectedTodoItemHighPriority.classList.add("priority-option");
            selectedTodoItemHighPriority.setAttribute("name", "priority-option");
            selectedTodoItemHighPriority.checked = selectedProject[i].highPriority;
            todoDetailsContainer.appendChild(selectedTodoItemHighPriority);

            const submitEditTodoButton = document.createElement("button");
            submitEditTodoButton.setAttribute("id", "submit-todo-edit-button");
            submitEditTodoButton.textContent = "Submit Edit";
            todoDetailsContainer.appendChild(submitEditTodoButton);

            const submitTodoEditForm = (event) => {
              event.preventDefault();

              const EditedTodo = (title, description, dueDate, lowPriority, highPriority) => {
                return { title, description, dueDate, lowPriority, highPriority };
              };

              const title = document.querySelector("#selected-title-input").value;
              const description = document.querySelector("#selected-description-textarea").value;
              const dueDate = document.querySelector("#selected-due-date-input").value;
              const lowPriority = document.querySelector("#low-priority").checked;
              const highPriority = document.querySelector("#high-priority").checked;
              
              const todoEdit = EditedTodo(title, description, dueDate, lowPriority, highPriority);

              selectedProject.splice(todoItem.dataset.todoId, 1, todoEdit);
              showTodosList();
              updateProjectList();

              const todosContainer = document.querySelector("#todos-container");
              todosContainer.innerHTML = "";

              const todoBackground = document.querySelector("#todo-background");
              document.body.removeChild(todoBackground);

              const formContainer = document.querySelector("#form-container");
              document.body.removeChild(formContainer);
            };

            submitEditTodoButton.addEventListener("click", submitTodoEditForm);
          };

          const deleteIcon = document.createElement("class");
          deleteIcon.setAttribute("id", "delete-icon");
          deleteIcon.classList.add("id", "material-symbols-outlined");
          deleteIcon.textContent = "delete";
          todoItemRightContainer.appendChild(deleteIcon);

          deleteIcon.addEventListener("click", deleteTodoItem);

          function deleteTodoItem () {
            todosContainer.removeChild(todoItem);
            selectedProject.splice(todoItem.dataset.todoId, 1);
            showTodosList();
            updateProjectList();
          };
        };
      };

      showTodosList();
    });
  });
};

const exitTodo = () => {
  const todoBackground = document.querySelector("#todo-background");
  document.body.removeChild(todoBackground);

  const formContainer = document.querySelector("#form-container");
  document.body.removeChild(formContainer);
};

export { updateProjectList };