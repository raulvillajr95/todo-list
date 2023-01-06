import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
import { createTodo, todoObj } from './todo-helpers';
// import { displayTitle, todoDatePriority, displayDescription } from './helpers';
// import todoPage from './todo-page';

const app = new TodoList();

// Home Page
// app.homePage();

// Folder Page, making todo's clickable
createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
app.folderPage('Default');

// Todo Page(manual info for now)
// todoPage();

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
