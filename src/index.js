import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
// import homePage from './home-page';
import { clearDisplay } from './helpers';
import { createTodo } from './todo-helpers';
import { listOfTodosToDisplay } from './folder-helpers';
import folderPage from './folder-page';

// Home Page
// homePage();

// Folder page,(manual name for now)
folderPage('Default');

// Create todo
// Either make whole piece a function or add to Folder Page
// const todoAddFolderBtn = document.querySelector('#todo-add-folder-btn');
// todoAddFolderBtn.addEventListener('click', () => {
//   const todoTitleFolder = document.querySelector('#todo-title-folder');
//   const todoDuedateFolder = document.querySelector('#todo-duedate-folder');
//   const todoPriorityFolder = document.querySelector('#todo-priority-folder');
//   const todoDescriptionFolder = document.querySelector(
//     '#todo-description-folder'
//   );
//   // Manu
//   createTodo(
//     todoTitleFolder.value,
//     todoDescriptionFolder.value,
//     todoDuedateFolder.value,
//     todoPriorityFolder.value,
//     'Default'
//   );
//   clearDisplay('#list-folder');
//   listOfTodosToDisplay('Default');
//   todoTitleFolder.value = '';
//   todoDuedateFolder.value = '';
//   todoPriorityFolder.value = '';
//   todoDescriptionFolder.value = '';

//   // Test logs
//   console.log(todoDependencies.defaultFolder, 'default folders');
//   console.log(todoDependencies.folders, 'folders');
// });

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
