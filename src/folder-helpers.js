import Folder from './folder';
import todoDependencies from './dependencies';
import { displayList } from './display-helpers';

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name));
}

function deleteFolder(folderToRemove) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderToRemove) {
      const index = todoDependencies.folders.indexOf(currentFolder);
      todoDependencies.folders.splice(index, 1);
    }
  });
}

function listOfTodosToDisplay(folderName) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, 'folder');
    }
  });
}

export { createFolder, deleteFolder, listOfTodosToDisplay };
