import Folder from './folder';
import todoDependencies from './dependencies';
import { listElemExists } from './display-helpers';
import { deleteTodo } from './todo-helpers';
import { loadElemToContainer, addTextToElem } from './helpers';

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name));
}

function deleteFolder(folderToRemove) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderToRemove) {
      // Delete todos from Default too
      const folderLength = currentFolder.folder.length;
      for (let i = 0; i < folderLength; i += 1) {
        deleteTodo(
          currentFolder.folder[0].title,
          currentFolder.folder[0].dueDate,
          currentFolder.folder[0].priority
        );
      }

      const index = todoDependencies.folders.indexOf(currentFolder);
      todoDependencies.folders.splice(index, 1);
    }
  });
}

function listOfTodosToDisplay(folderName) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      if (!listElemExists('folder')) {
        loadElemToContainer('#content', 'div', `list-folder`);
      }

      for (let i = 0; i < currentFolder.folder.length; i += 1) {
        const item = currentFolder.folder[i];

        loadElemToContainer(
          `#list-folder`,
          'div',
          `list-folder-${item.title}-div`
        );
        loadElemToContainer(
          `#list-folder-${item.title}-div`,
          'span',
          `list-folder-${item.title}-text`
        );
        addTextToElem(`#list-folder-${item.title}-text`, `${item.title}`);

        loadElemToContainer(
          `#list-folder-${item.title}-div`,
          'span',
          `list-folder-${item.title}-duedate`
        );
        addTextToElem(`#list-folder-${item.title}-duedate`, `${item.dueDate}`);

        if (!(item.name === 'Default' && 'folder' === 'home')) {
          loadElemToContainer(
            `#list-folder-${item.title}-div`,
            'button',
            `list-folder-${item.title}-del-btn`
          );
          addTextToElem(`#list-folder-${item.title}-del-btn`, 'DEL');
        }
      }
    }
  });
}

function defaultFolderName() {
  // returns string 'Folder' + (number of folders + 1)
  const numberOfFolders = todoDependencies.folders.length;
  return `Folder${numberOfFolders}`;
}

export { createFolder, deleteFolder, listOfTodosToDisplay, defaultFolderName };
