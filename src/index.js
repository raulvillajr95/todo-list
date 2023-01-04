import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import { displayFolderForm, displayTitle, displayTodoForm } from './helpers';
import { displayList } from './display-helpers';
import { createFolder } from './folder-helpers';

// Home Page, doesn't need to be a function yet
displayTitle('home', 'Todo List');
displayTodoForm('home');
displayList(todoDependencies.folders, 'home');
displayFolderForm();

// Home Folder Add Button
const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
folderAddHomeBtn.addEventListener('click', () => {
  const folderTitleHome = document.querySelector('#folder-title-home');
  console.log(folderTitleHome.value);
  createFolder(folderTitleHome.value);

  console.log(todoDependencies.defaultFolder, 'default folders');
  console.log(todoDependencies.folders, 'folders');
});

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
