import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
import { createTodo, deleteTodo, todoObj } from './todo-helpers';
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
// Folder todo's DEL btn
// const listFolderDiv = document.querySelector('#list-folder');
// for (let i = 0; i < listFolderDiv.children.length; i += 1) {
//   listFolderDiv.children[i].children[1].addEventListener('click', () => {
//     const todoClicked = listFolderDiv.children[i].children[0].textContent;
//     const todoAsObj = todoObj(todoClicked);
//     // this.todoPage(todoObj(todoClicked));
//     console.log(todoAsObj.title);
//     deleteTodo(todoAsObj.title, todoAsObj.dueDate, todoAsObj.priority);
//     const folderTitle = document.querySelector('#folder-title');
//     console.log(folderTitle.textContent);
//     app.folderPage(folderTitle.textContent);
//   });
// }

// Todo Page(manual info for now)
// createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
// app.todoPage(todoObj('Microwave'));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
