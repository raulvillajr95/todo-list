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

  // working on this...
  const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
  folderAddHomeBtn.addEventListener('click', () => {
    const folderTitleHome = document.querySelector('#folder-title-home');
    createFolder(folderTitleHome.value);
    // clearDisplay('#content');
    // homePage();
    clearDisplay('#list-home');
    displayList(todoDependencies.folders, 'home');
    console.log('first');

    console.log(todoDependencies.defaultFolder, 'default folders');
    console.log(todoDependencies.folders, 'folders');
  });
}

export default homePage;
