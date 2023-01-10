import todoDependencies from './dependencies';
import {
  loadElemToContainer,
  addTextToElem,
  addAttributeToElem,
} from './helpers';

function listElemExists(page) {
  const contentDiv = document.querySelector('#content');
  return `list-${page}` in contentDiv.children;
}

function displayList(listToDisplay, page) {
  if (!listElemExists(page)) {
    loadElemToContainer('#content', 'div', `list-${page}`);
  }

  for (let i = 0; i < listToDisplay.length; i += 1) {
    const item = listToDisplay[i];

    let name;
    if (page === 'home') {
      name = item.name;
    } else if (page === 'folder') {
      name = item.title;
    }
    loadElemToContainer(`#list-${page}`, 'div', `list-${page}-${name}-div`);
    loadElemToContainer(
      `#list-${page}-${name}-div`,
      'span',
      `list-${page}-${name}-text`
    );
    addTextToElem(`#list-${page}-${name}-text`, `${name}`);
    if (!(item.name === 'Default' && page === 'home')) {
      loadElemToContainer(
        `#list-${page}-${name}-div`,
        'button',
        `list-${page}-${name}-del-btn`
      );
      addTextToElem(`#list-${page}-${name}-del-btn`, 'DEL');
    }
  }
}

function nameOfListToDisplay(folderName, page) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, page);
    }
  });
}

function displayFolderSelect(folder) {
  loadElemToContainer(`#todo-form-home`, 'label', `todo-folder-home-label`);
  addAttributeToElem(`#todo-folder-home-label`, 'for', `todo-folder-home`);
  addTextToElem(`#todo-folder-home-label`, 'Folder');
  loadElemToContainer(`#todo-form-home`, 'select', `todo-folder-home`);
  addAttributeToElem(`#todo-folder-home`, 'name', `todo-folder-home`);
  for (let i = 0; i < folder.length; i += 1) {
    console.log('dfs 1');
    loadElemToContainer(
      `#todo-folder-home`,
      'option',
      `todo-folder-home-${folder[i].name}`
    );
    console.log('dfs 2');
    addAttributeToElem(
      `#todo-folder-home-${folder[i].name}`,
      'value',
      `${folder[i].name}`
    );
    // Testing... add dataset attribute
    addAttributeToElem(`#todo-folder-home`, 'data-folder', 'default folder');

    console.log('dfs 3');
    addTextToElem(`#todo-folder-home-${folder[i].name}`, `${folder[i].name}`);
  }
}

function displayTodoEditBtn() {
  loadElemToContainer('#content', 'button', 'todo-edit-btn');
  addTextToElem('#todo-edit-btn', 'EDIT');
}

export {
  displayList,
  nameOfListToDisplay,
  listElemExists,
  displayFolderSelect,
  displayTodoEditBtn,
};
