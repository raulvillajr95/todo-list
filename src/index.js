import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
// import homePage from './home-page';
import { displayTitle, displayTodoForm, clearDisplay } from './helpers';
import { createTodo } from './todo-helpers';
import { listOfTodosToDisplay } from './folder-helpers';

// Home Page
// homePage();

// Folder page,(manual name for now)
displayTitle('folder', 'Default');
displayTodoForm('folder');
listOfTodosToDisplay('Default');

// Create todo
const todoAddFolderBtn = document.querySelector('#todo-add-folder-btn');
todoAddFolderBtn.addEventListener('click', () => {
  const todoTitleFolder = document.querySelector('#todo-title-folder');
  createTodo(
    todoTitleFolder.value,
    'No.2 pencils needed for math',
    '01-08-2023',
    1,
    'Default'
  );
  clearDisplay('#list-folder');
  listOfTodosToDisplay('Default');
  todoTitleFolder.value = '';

  // Test logs
  console.log(todoDependencies.defaultFolder, 'default folders');
  console.log(todoDependencies.folders, 'folders');
});

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
