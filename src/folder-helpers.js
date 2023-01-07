import Folder from './folder';
import todoDependencies from './dependencies';
import { displayList } from './display-helpers';
import { deleteTodo } from './todo-helpers';

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
      displayList(currentFolder.folder, 'folder');
    }
  });
}

export { createFolder, deleteFolder, listOfTodosToDisplay };
