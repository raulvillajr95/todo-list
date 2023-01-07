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
      // Testing... need to delete todo's from default folder as well
      // Delete todos from Default too
      const folderLength = currentFolder.folder.length;
      console.log(folderLength, 'length before FOR');
      for (let i = 0; i < folderLength; i += 1) {
        console.log(folderLength, 'length after FOR');
        console.log(currentFolder.folder[i], `${i}`);
        deleteTodo(
          currentFolder.folder[0].title,
          currentFolder.folder[0].dueDate,
          currentFolder.folder[0].priority
        );
        // for (
        //   let j = 0;
        //   j < todoDependencies.defaultFolder.folder.length;
        //   j += 1
        // ) {
        //   console.log(currentFolder.folder[i], `Todo ${i + 1}`);
        //   console.log(
        //     currentFolder.folder[i].title,
        //     currentFolder.folder[i].dueDate,
        //     currentFolder.folder[i].priority
        //   );
        //   deleteTodo(
        //     currentFolder.folder[i].title,
        //     currentFolder.folder[i].dueDate,
        //     currentFolder.folder[i].priority
        //   );
        // }
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
