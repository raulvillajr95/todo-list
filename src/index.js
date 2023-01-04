import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import { createFolder } from './folder-helpers';
import homePage from './home-page';
import {
  clearDisplay,
  displayFolderForm,
  displayTitle,
  displayTodoForm,
} from './helpers';
import { displayList } from './display-helpers';

// Home Page, doesn't need to be a function yet
// homePage();
displayTitle('home', 'Todo List');
displayTodoForm('home');
createFolder('Folder1');
// console.log(todoDependencies.folders);
displayList(todoDependencies.folders, 'home');
displayFolderForm();

// Home Folder Add Button
// const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
// folderAddHomeBtn.addEventListener('click', () => {
//   // const folderTitleHome = document.querySelector('#folder-title-home');
//   // createFolder(folderTitleHome.value);
//   // clearDisplay('#content');
//   // // homePage();
//   console.log('first');

//   console.log(todoDependencies.defaultFolder, 'default folders');
//   console.log(todoDependencies.folders, 'folders');
// });

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
