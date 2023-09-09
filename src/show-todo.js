import { defaultProjectArray } from "./new-todo-form";

const showTodoItem = () => {
  const todoItemsInList = document.querySelectorAll(".todo-item");

  todoItemsInList.forEach((todoItem) => {
    todoItem.addEventListener("click", function showToDoItem () {
      const bgForNewTodo = document.querySelector("#new-todo-bg");
      bgForNewTodo.style.display = "flex";
      const containerForNewTodo = document.querySelector("#new-todo-container");
      containerForNewTodo.style.display = "flex";
      containerForNewTodo.innerHTML = "";
      const todoItemInArray = defaultProjectArray[todoItem.dataset.todoId];
      const toDoItemContainer = document.createElement("div");
      toDoItemContainer.setAttribute("id", "new-todo-item-container");
      containerForNewTodo.appendChild(toDoItemContainer);
      const toDoItemTitleNavbar = document.createElement("div");
      toDoItemTitleNavbar.setAttribute("id", "new-todo-item-navbar");
      const todoItemText = document.createElement("div");
      todoItemText.setAttribute("id", "todo-item-text");
      todoItemText.textContent = "TODO ITEM";
      toDoItemContainer.appendChild(toDoItemTitleNavbar);
      toDoItemTitleNavbar.appendChild(todoItemText);
      const toDoItemTitle = document.createElement("div");
      toDoItemTitle.setAttribute("id", "new-todo-item-title");
      toDoItemTitle.textContent = todoItemInArray.title;
      toDoItemContainer.appendChild(toDoItemTitle);
      const closeTodoItemBtn = document.createElement("span");
      closeTodoItemBtn.classList.add("material-symbols-outlined");
      closeTodoItemBtn.textContent = "close";
      toDoItemTitleNavbar.appendChild(closeTodoItemBtn);
      const toDoItemDueDate = document.createElement("div");
      toDoItemDueDate.setAttribute("id", "new-todo-item-due-date");
      toDoItemDueDate.textContent = `Due date: ${todoItemInArray.dueDate}`;
      toDoItemContainer.appendChild(toDoItemDueDate);
      const toDoItemPriority = document.createElement("div");
      toDoItemPriority.setAttribute("id", "new-todo-item-priority");
      toDoItemPriority.textContent = "Priority: ";
      let itemHighPriority = todoItemInArray.highPriority;
      let itemLowPriority = todoItemInArray.lowPriority;
      if (itemHighPriority == true) {
        const highPriorityContainer = document.createElement("div");
        highPriorityContainer.setAttribute("id", "high-priority-container");
        highPriorityContainer.textContent = "HIGH";
        toDoItemPriority.appendChild(highPriorityContainer);
      } else if (itemLowPriority == true) {
        const lowPriorityContainer = document.createElement("div");
        lowPriorityContainer.setAttribute("id", "low-priority-container");
        lowPriorityContainer.textContent = "LOW";
        toDoItemPriority.appendChild(lowPriorityContainer);
      };
      toDoItemContainer.appendChild(toDoItemPriority);
      const toDoItemDescription = document.createElement("div");
      toDoItemDescription.setAttribute("id", "new-todo-item-description");
      toDoItemDescription.textContent = `Description: ${todoItemInArray.description}`;
      toDoItemContainer.appendChild(toDoItemDescription);

      const resetNewToDoContainer = () => {
        const bgForNewTodo = document.querySelector("#new-todo-bg");
        bgForNewTodo.style.display = "none";
        const containerForNewTodo = document.querySelector("#new-todo-container");
        containerForNewTodo.style.display = "none";
        containerForNewTodo.innerHTML = "";
      };

      closeTodoItemBtn.addEventListener("click", resetNewToDoContainer);
    });
  });
};

export { showTodoItem };