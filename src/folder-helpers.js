import Folder from './folder';
import todoDependencies from './dependencies';
import { listElemExists } from './display-helpers';
import { deleteTodo } from './todo-helpers';
import { loadElemToContainer, addTextToElem } from './helpers';

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name));

  // Just test logging results
  console.log(todoDependencies.defaultFolder, 'default folders');
  console.log(todoDependencies.folders, 'folders');
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
}

function listOfTodosToDisplay(folderId) {
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
        addTextToElem(`#list-folder-${item.todoId}-text`, `${item.todoId}`);

        loadElemToContainer(
          `#list-folder-${item.todoId}-div`,
          'span',
          `list-folder-${item.todoId}-duedate`
        );
        addTextToElem(`#list-folder-${item.todoId}-duedate`, `${item.dueDate}`);
      }
    }
  });
}

function defaultFolderName() {
  // returns string 'Folder' + folderId
  return `Folder${Folder.folderCount}`;
}

export { createFolder, deleteFolder, listOfTodosToDisplay, defaultFolderName };
