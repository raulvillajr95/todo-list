import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';
// import { createTodo, todoObj } from './todo-helpers';
import { createFolder, deleteFolder } from './folder-helpers';

const app = new TodoList();

// Manual folders
createFolder('Groceries');
createFolder('Liquour');
createFolder('Waters');
// Home Page
app.homePage();
// Home folders DEL btn
// const listHomeDiv = document.querySelector('#list-home');
// for (let i = 0; i < listHomeDiv.children.length; i += 1) {
//   if (listHomeDiv.children[i].children[0].textContent !== 'Default') {
//     listHomeDiv.children[i].children[1].addEventListener('click', () => {
//       const folderRemoveName = listHomeDiv.children[i].children[0].textContent;
//       console.log(folderRemoveName);
//       deleteFolder(folderRemoveName);
//       app.homePage();

//       // Just test logging results
//       console.log(todoDependencies.defaultFolder, 'default folders');
//       console.log(todoDependencies.folders, 'folders');
//     });
//   }
// }

// Manual Todo's
// createTodo('Refrigerator', 'Three door fridge', '2022-12-25', 1);
// createTodo('Microwave', 'Small microwave', '2023-01-10', 1);
// createTodo('Shaker', '1 liter smoothie shaker', '2022-12-30', 1);
// Folder Page, making todo's clickable
// app.folderPage('Default');

// Todo Page
// app.todoPage(todoObj('Microwave'));

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
