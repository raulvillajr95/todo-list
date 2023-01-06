import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
import { createTodo, todoObj } from './todo-helpers';
import { clearDisplay } from './helpers';

const app = new TodoList();

// Home Page
// app.homePage();

// Manual Todo's
createTodo('Refrigerator', 'Three door fridge', '2022-12-25', 1);
createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
createTodo('Shaker', '1 liter smoothie shaker', '2022-12-30', 1);
// Folder Page, making todo's clickable
app.folderPage('Default');

// Todo Page
// app.todoPage(todoObj('Microwave'));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
