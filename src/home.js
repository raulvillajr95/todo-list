import { todoDependencies } from "./index.js";
import { clearDisplay } from "./helpers.js";
import {
  createFolder,
  deleteFolder,
} from './folder.js';
import {
  displayFolderPage,
  displayHomePage,
  displayList,
} from './display.js'

function homeFolderFunctionality() {
  const folderAddBtn = document.querySelector('#folder-add-home-btn');
  const newFolderInp = document.querySelector('#folder-title-home')

  folderAddBtn.addEventListener('click', () => {
    createFolder(newFolderInp.value)
    clearDisplay('#list-home')
    // see wassup here
    displayList(todoDependencies.folders, 'home')
    folderDivAsButton()
    newFolderInp.value = ''

    console.log(todoDependencies.folders, 'folders')
    console.log(todoDependencies.defaultFolder, 'default folder')
  })
}

function folderDivAsButton() {
  const listHome = document.querySelector('#list-home')
  for (let i = 0; i < listHome.children.length; i++) {
    listHome.children[i].children[0].addEventListener('click', () => {
      let folder = listHome.children[i].children[0].textContent;
      clearDisplay('#content')
      displayFolderPage(folder)
    })
    if (listHome.children[i].children[1] == undefined ) {
      continue;
    }
    listHome.children[i].children[1].addEventListener('click', () => {
      let folder = listHome.children[i].children[0].textContent
      deleteFolder(folder)
      if (todoDependencies.folders.length >= 2) {
        clearDisplay('#list-home')
        displayList(todoDependencies.folders, 'home')
        folderDivAsButton()
      } else {
        clearDisplay('#content')
        displayHomePage()
      }
    })
  }
}

export {
  homeFolderFunctionality,
  folderDivAsButton,
}
