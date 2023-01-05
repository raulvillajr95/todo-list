import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
import { createTodo } from './todo-helpers';

const app = new TodoList();

// Home Page
app.homePage();

// // Add todo to 'Default' folder from home page
// const todoAddHomeBtn = document.querySelector('#todo-add-home-btn');
// todoAddHomeBtn.addEventListener('click', () => {
//   const todoTitleHome = document.querySelector('#todo-title-home');
//   const todoDuedateHome = document.querySelector('#todo-duedate-home');
//   const todoPriorityHome = document.querySelector('#todo-priority-home');
//   const todoDescriptionHome = document.querySelector('#todo-description-home');
//   createTodo(
//     todoTitleHome.value,
//     todoDescriptionHome.value,
//     todoDuedateHome.value,
//     todoPriorityHome.value
//   );
//   todoTitleHome.value = '';
//   todoDuedateHome.value = '';
//   todoPriorityHome.value = '';
//   todoDescriptionHome.value = '';

//   console.log(todoDependencies.defaultFolder, 'default folders');
//   console.log(todoDependencies.folders, 'folders');
// });

// Folder Page
// app.folderPage('Default');

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
