import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
// import { createTodo, todoObj } from './todo-helpers';
// import { displayTitle, todoDatePriority, displayDescription } from './helpers';
// import todoPage from './todo-page';

const app = new TodoList();

// Home Page
app.homePage();

// Folder Page, making todo's clickable
// app.folderPage('Default');

// Todo Page(manual info for now)
// createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
// todoPage(todoObj('Microwave'));
// // Back button, within todo page
// const todoBackBtn = document.querySelector('#todo-back-btn');
// todoBackBtn.addEventListener('click', () => {
//   console.log('first');
//   // need folder name to call folderPage(folderName)
//   app.folderPage('Default');
// });

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
