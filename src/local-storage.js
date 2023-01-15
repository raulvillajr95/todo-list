import todoDependencies from './dependencies';
import Folder from './folder';
import Todo from './todo';

// Check if storage is available in browser
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
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

// Populate from dependencies to localStorage
function populateStorage() {
  if (storageAvailable('localStorage')) {
    // Folder
    localStorage.setItem('folderCount', JSON.stringify(Folder.folderCount));

    // Todo
    localStorage.setItem('todoCount', JSON.stringify(Todo.todoCount));

    // todoDependencies
    localStorage.setItem(
      'defaultFolder',
      JSON.stringify(todoDependencies.defaultFolder)
    );
    localStorage.setItem('folders', JSON.stringify(todoDependencies.folders));
  } else {
    console.log('not good');
  }
}

// Populate from localStorage to dependencies
function populateDependencies() {
  if (storageAvailable('localStorage')) {
    if (localStorage.getItem('folders') == null) {
      populateStorage();
    } else {
      // Folder
      Folder.folderCount = JSON.parse(localStorage.getItem('folderCount'));

      // Todo
      Todo.todoCount = JSON.parse(localStorage.getItem('todoCount'));

      // todoDependencies
      const defaultF = JSON.parse(localStorage.getItem('defaultFolder'));
      todoDependencies.defaultFolder = defaultF;
      todoDependencies.folders = JSON.parse(localStorage.getItem('folders'));
      todoDependencies.folders[0] = defaultF;
    }
  } else {
    console.log('not good');
  }
}

export { populateDependencies, populateStorage };
