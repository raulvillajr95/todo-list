import Folder from './folder';
import todoDependencies from './dependencies';
import { listElemExists } from './display-helpers';
import { deleteTodo } from './todo-helpers';
import {
  loadElemToContainer,
  addTextToElem,
  addAttributeToElem,
} from './helpers';
import { populateStorage } from './local-storage';

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name));
  populateStorage();
}

function deleteFolder(folderId) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.folderId === folderId) {
      // Delete todos from Default too
      const folderLength = currentFolder.folder.length;
      for (let i = 0; i < folderLength; i += 1) {
        deleteTodo(currentFolder.folder[0].todoId);
      }

      const index = todoDependencies.folders.indexOf(currentFolder);
      todoDependencies.folders.splice(index, 1);
    }
  });
  populateStorage();
}

function listOfTodosToDisplay(folderId) {
  console.log(todoDependencies.folders.length, 'folders length');
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.folderId === folderId) {
      if (!listElemExists('folder')) {
        loadElemToContainer('#content', 'div', `list-folder`);
      }

      for (let i = 0; i < currentFolder.folder.length; i += 1) {
        const item = currentFolder.folder[i];

        loadElemToContainer(
          `#list-folder`,
          'div',
          `list-folder-${item.todoId}-div`
        );
        loadElemToContainer(
          `#list-folder-${item.todoId}-div`,
          'span',
          `list-folder-${item.todoId}-text`
        );
        addAttributeToElem(
          `#list-folder-${item.todoId}-text`,
          'data-todo-id',
          `${item.todoId}`
        );
        addTextToElem(`#list-folder-${item.todoId}-text`, `${item.title}`);

        loadElemToContainer(
          `#list-folder-${item.todoId}-div`,
          'span',
          `list-folder-${item.todoId}-duedate`
        );
        addTextToElem(`#list-folder-${item.todoId}-duedate`, `${item.dueDate}`);

        // Display 'DEL' btn
        // Add data todo id's
        loadElemToContainer(
          `#list-folder-${item.todoId}-div`,
          'button',
          `list-folder-${item.todoId}-del-btn`
        );
        addAttributeToElem(
          `#list-folder-${item.todoId}-del-btn`,
          'data-todo-id',
          `${item.todoId}`
        );
        addTextToElem(`#list-folder-${item.todoId}-del-btn`, 'DEL');
      }
    }
  });
}

function defaultFolderName() {
  // returns string 'Folder' + folderCount
  return `Folder${Folder.folderCount}`;
}

function folderObj(folderId) {
  let obj;
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.folderId === folderId) {
      obj = currentFolder;
    }
  });
  return obj;
}

export {
  createFolder,
  deleteFolder,
  listOfTodosToDisplay,
  defaultFolderName,
  folderObj,
};
