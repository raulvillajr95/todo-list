import todoDependencies from './dependencies';
import {
  displayFolderForm,
  displayTitle,
  displayTodoForm,
  clearDisplay,
} from './helpers';
import { displayList } from './display-helpers';
import { createFolder } from './folder-helpers';

function homePage() {
  displayTitle('home', 'Todo List');
  displayTodoForm('home');
  displayList(todoDependencies.folders, 'home');
  displayFolderForm();

  // Home Folder Add Button, maybe make this a function
  const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
  folderAddHomeBtn.addEventListener('click', () => {
    const folderTitleHome = document.querySelector('#folder-title-home');
    createFolder(folderTitleHome.value);
    clearDisplay('#list-home');
    displayList(todoDependencies.folders, 'home');
    folderTitleHome.value = '';
  });
}

export default homePage;
