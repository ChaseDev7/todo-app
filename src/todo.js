import { newForm } from "./new-todo-form";

const ToDo = () => {
  const formDetails = newForm;
  const mainContainer = document.querySelector("#main-container");
  const titleInput = formDetails.titleInput;

  mainContainer.innerHTML = titleInput;
  console.log(titleInput);
}

export { ToDo };