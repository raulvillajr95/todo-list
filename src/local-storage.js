import todoDependencies from './dependencies';
import Folder from './folder';
import Todo from './todo';

// Checking if localStorage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '___storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length !== 0
    );
  }
}

// Make changes from dependencies to storage
function populateStorage() {
  if (storageAvailable('localStorage')) {
    // app.homePage() but with localStorage info;

    // Folder
    localStorage.setItem('folderCount', Folder.folderCount);
    // Todo
    localStorage.setItem('todoCount', Todo.todoCount);

    // todoDependencies
    localStorage.setItem(
      'defaultFolder',
      JSON.stringify(todoDependencies.defaultFolder)
    );
    localStorage.setItem('folders', JSON.stringify(todoDependencies.folders));

    console.log(localStorage);
    console.log(todoDependencies);
  } else {
    // app.homepage() but with todoDepencies info
    console.log('not good');
  }
}

// Make changes from storage to dependencies
function populateDependencies() {
  if (storageAvailable('localStorage')) {
    if (!JSON.parse(localStorage.getItem('folders'))) {
      console.log('first');
      populateStorage();
    }
    // Folder
    const folderCount = JSON.parse(localStorage.getItem('folderCount'));
    Folder.folderCount = folderCount;

    // Todo
    const todoCount = JSON.parse(localStorage.getItem('todoCount'));
    Todo.todoCount = todoCount;

    // todoDependencies
    const defaultFolder = JSON.parse(localStorage.getItem('defaultFolder'));
    todoDependencies.defaultFolder = defaultFolder;
    const folders = JSON.parse(localStorage.getItem('folders'));
    todoDependencies.folders = folders;

    console.log(folderCount);
    console.log(todoCount);
    console.log(defaultFolder);
    console.log(folders);

    console.log(localStorage);
    console.log(todoDependencies);
  } else {
    console.log('not good');
  }
}

export { populateStorage, populateDependencies };
