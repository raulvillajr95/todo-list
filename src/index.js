import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import { createFolder } from './folder-helpers';
import homePage from './home-page';
import { clearDisplay } from './helpers';
import { displayList } from './display-helpers';

// Home Page
homePage();

// Home Folder Add Button
// const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
// folderAddHomeBtn.addEventListener('click', () => {
//   const folderTitleHome = document.querySelector('#folder-title-home');
//   createFolder(folderTitleHome.value);
//   // clearDisplay('#content');
//   // homePage();
//   clearDisplay('#list-home');
//   displayList(todoDependencies.folders, 'home');
//   console.log('first');

//   console.log(todoDependencies.defaultFolder, 'default folders');
//   console.log(todoDependencies.folders, 'folders');
// });

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
