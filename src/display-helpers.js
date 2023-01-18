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

    let id;
    let name;
    let dataName;
    if (page === 'home') {
      id = item.folderId;
      name = item.name;
      dataName = 'data-folder-id';
    } else if (page === 'folder') {
      id = item.todoId;
      name = item.title;
      dataName = 'data-todo-id';
    }
    loadElemToContainer(`#list-${page}`, 'div', `list-${page}-${id}-div`);
    loadElemToContainer(
      `#list-${page}-${id}-div`,
      'span',
      `list-${page}-${id}-text`
    );
    addAttributeToElem(`#list-${page}-${id}-text`, `${dataName}`, `${id}`);
    addTextToElem(`#list-${page}-${id}-text`, `${name}`);
    if (!(item.folderId === 0 && page === 'home')) {
      loadElemToContainer(
        `#list-${page}-${id}-div`,
        'i',
        `list-${page}-${id}-del-btn`
      );
      // addTextToElem(`#list-${page}-${id}-del-btn`, 'DEL');
      addAttributeToElem(
        `#list-${page}-${id}-del-btn`,
        'class',
        'fa-solid fa-trash-can'
      );
    }
  }
}

function displayFolderSelect(folder) {
  loadElemToContainer(`#todo-form-home`, 'label', `todo-folder-home-label`);
  addAttributeToElem(`#todo-folder-home-label`, 'for', `todo-folder-home`);
  addTextToElem(`#todo-folder-home-label`, 'Folder');
  loadElemToContainer(`#todo-form-home`, 'select', `todo-folder-home`);
  addAttributeToElem(`#todo-folder-home`, 'name', `todo-folder-home`);
  for (let i = 0; i < folder.length; i += 1) {
    loadElemToContainer(
      `#todo-folder-home`,
      'option',
      `todo-folder-home-${folder[i].folderId}`
    );
    addAttributeToElem(
      `#todo-folder-home-${folder[i].folderId}`,
      'value',
      `${folder[i].folderId}`
    );
    addTextToElem(
      `#todo-folder-home-${folder[i].folderId}`,
      `${folder[i].name}`
    );
  }
}

function displayTodoEditBtn() {
  loadElemToContainer('#content', 'button', 'todo-edit-btn');
  addTextToElem('#todo-edit-btn', 'EDIT');
}

export { displayList, listElemExists, displayFolderSelect, displayTodoEditBtn };
