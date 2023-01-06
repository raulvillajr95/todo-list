import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
import { createTodo, todoObj } from './todo-helpers';

const app = new TodoList();

// Home Page
app.homePage();

// Folder Page, making todo's clickable
// app.folderPage('Default');

// Todo Page(manual info for now)
createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
app.todoPage(todoObj('Microwave'));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
