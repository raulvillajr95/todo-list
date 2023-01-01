import todoDependencies from './dependencies';
import { clearDisplay } from './helpers';
import { createFolder, deleteFolder } from './folder-helpers';
import displayHomePage from './index';
import { displayList } from './display-helpers';
import { displayFolderPage } from './display';

function folderDivAsButton() {
  const listHome = document.querySelector('#list-home');
  for (let i = 0; i < listHome.children.length; i += 1) {
    listHome.children[i].children[0].addEventListener('click', () => {
      const folder = listHome.children[i].children[0].textContent;
      clearDisplay('#content');
      displayFolderPage(folder);
    });
    if (listHome.children[i].children[1] !== undefined) {
      listHome.children[i].children[1].addEventListener('click', () => {
        const folder = listHome.children[i].children[0].textContent;
        deleteFolder(folder);
        if (todoDependencies.folders.length >= 2) {
          clearDisplay('#list-home');
          displayList(todoDependencies.folders, 'home');
          folderDivAsButton();
        } else {
          clearDisplay('#content');
          displayHomePage();
        }
      });
    }
  }
}

function homeFolderFunctionality() {
  const folderAddBtn = document.querySelector('#folder-add-home-btn');
  const newFolderInp = document.querySelector('#folder-title-home');

  folderAddBtn.addEventListener('click', () => {
    createFolder(newFolderInp.value);
    clearDisplay('#list-home');
    // see wassup here
    displayList(todoDependencies.folders, 'home');
    folderDivAsButton();
    newFolderInp.value = '';

    console.log(todoDependencies.folders, 'folders');
    console.log(todoDependencies.defaultFolder, 'default folder');
  });
}

export { homeFolderFunctionality, folderDivAsButton };
