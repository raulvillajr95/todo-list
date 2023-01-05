import { displayTitle, displayTodoForm, clearDisplay } from './helpers';
import { listOfTodosToDisplay } from './folder-helpers';
import { createTodo } from './todo-helpers';

// Folder page,(manual name for now)
function folderPage(folder) {
  displayTitle('folder', folder);
  displayTodoForm('folder');
  listOfTodosToDisplay(folder);

  // Create todo
  const todoAddFolderBtn = document.querySelector('#todo-add-folder-btn');
  todoAddFolderBtn.addEventListener('click', () => {
    const todoTitleFolder = document.querySelector('#todo-title-folder');
    const todoDuedateFolder = document.querySelector('#todo-duedate-folder');
    const todoPriorityFolder = document.querySelector('#todo-priority-folder');
    const todoDescriptionFolder = document.querySelector(
      '#todo-description-folder'
    );
    createTodo(
      todoTitleFolder.value,
      todoDescriptionFolder.value,
      todoDuedateFolder.value,
      todoPriorityFolder.value,
      folder
    );
    clearDisplay('#list-folder');
    listOfTodosToDisplay('Default');
    todoTitleFolder.value = '';
    todoDuedateFolder.value = '';
    todoPriorityFolder.value = '';
    todoDescriptionFolder.value = '';
  });
}

export default folderPage;
