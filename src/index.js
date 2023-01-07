import './style.css';
import './reset.css';
import { format, parseISO } from 'date-fns';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
// import { createTodo, todoObj } from './todo-helpers';
// import { createFolder } from './folder-helpers';

const app = new TodoList();

// Manual folders
// createFolder('Groceries');
// createFolder('Liquour');
// createFolder('Waters');
// Manual folders & todos
// createFolder('Groceries');
// createTodo('Kale', '2lbs of kale', '2022-12-25', 1, 'Groceries');
// createTodo('Chili', 'a 32oz bottle of valentina', '2023-01-10', 1, 'Groceries');
// createFolder('Liquour');
// createTodo('Lighter', 'a fancy big flame lighter', '2022-12-30', 1, 'Liquour');
// createFolder('Waters');
// Home Page
app.homePage();

// Manual Todo's
// createTodo('Refrigerator', 'Three door fridge', '2022-12-25', 1);
// createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
// createTodo('Shaker', '1 liter smoothie shaker', '2022-12-30', 1);
// Folder Page, making todo's clickable
// app.folderPage('Default');

// Todo Page
// app.todoPage(todoObj('Microwave'));

// changing date example
// const date = '2022-12-25'; // format(parseISO(date), 'PP')
console.log(format(new Date(), 'p'));

// // Testing priority for todoDatePriority
// const priorityVal = 1;
// let priority = '';
// if (priorityVal === 0) {
//   priority = 'low';
// } else if (priorityVal === 1) {
//   priority = 'medium';
// } else if (priorityVal === 2) {
//   priority = 'high';
// }
function priorityTranslation(value) {
  let priority = ';';
  if (value === 0) {
    priority = 'low';
  } else if (value === 1) {
    priority = 'medium';
  } else if (value === 2) {
    priority = 'high';
  }
  return priority;
}
console.log('im here');
// console.log(priority, 'priority');
// console.log(priorityVal, 'priorityVal');
console.log(priorityTranslation(1));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
