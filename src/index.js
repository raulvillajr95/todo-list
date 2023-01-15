// import './style.css';
import './reset.css';
// import { format, parseISO } from 'date-fns';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
// import { createTodo, todoObj } from './todo-helpers';
// import { createFolder, defaultFolderName } from './folder-helpers';
// import Folder from './folder';
// import Todo from './todo';

const app = new TodoList();

// Manual Todo's
// createTodo('Refrigerator', 'Three door fridge', '2022-12-25', 1);
// createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
// createTodo('Shaker', '1 liter smoothie shaker', '2022-12-30', 1);
// // Manual folders
// createFolder('Groceries');
// createFolder('Liquour');
// createFolder('Waters');
// Manual folders & todos
// createFolder('Groceries');
// createTodo('Kale', '2lbs of kale', '2022-12-25', 1, 'Groceries');
// createTodo('Chili', 'aB 32oz bottle of valentina', '2023-01-10', 1, 'Groceries');
// createFolder('Liquour');
// createTodo('Lighter', 'a fancy big flame lighter', '2022-12-30', 1, 'Liquour');
// createFolder('Waters');
// Home Page
app.homePage();

// Folder Page`
// app.folderPage('Default');

// Todo Page
// app.todoPage(todoObj('Microwave'));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
