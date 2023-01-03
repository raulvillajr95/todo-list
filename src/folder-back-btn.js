import todoDependencies from './dependencies';
import {
  clearDisplay,
  loadElemToContainer,
  displayTitle,
  displayTodoForm,
  displayFolderForm,
} from './helpers';
import { displayList } from './display-helpers';
import { createFolder } from './folder-helpers';
import folderDivAsButton from './index';
import pageFormAddTodo from './folder-actions';

function homeFolderFunctionality() {
  const folderAddBtn = document.querySelector('#folder-add-home-btn');
  const newFolderInp = document.querySelector('#folder-title-home');

  folderAddBtn.addEventListener('click', () => {
    createFolder(newFolderInp.value);
    clearDisplay('#list-home');
    // see wassup here
    displayList(todoDependencies.folders, 'home');
    folderDivAsButton(); // not in good modules
    newFolderInp.value = '';

    console.log(todoDependencies.folders, 'folders');
    console.log(todoDependencies.defaultFolder, 'default folder');
  });
}

function folderBackBtn() {
  const backBtn = document.querySelector('#folder-back-btn');
  backBtn.addEventListener('click', () => {
    clearDisplay('#content');
    if (todoDependencies.folders.length === 1) {
      displayTitle('home', 'Todo List');
      displayTodoForm('home');
      displayList(todoDependencies.folders, 'home');
      displayFolderForm();
      homeFolderFunctionality(); // not in good modules
      pageFormAddTodo('home');
      folderDivAsButton(); // not in good modules
    } else {
      displayTitle('home', 'Todo List');
      displayTodoForm('home');
      loadElemToContainer('#content', 'div', 'list-home');
      displayList(todoDependencies.folders, 'home');
      displayFolderForm();
      homeFolderFunctionality(); // not in good modules
      pageFormAddTodo('home'); // not in good modules
      folderDivAsButton(); // not in good modules
    }
  });
}

export default folderBackBtn;
