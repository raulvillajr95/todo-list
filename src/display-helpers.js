import todoDependencies from './dependencies';
import { loadElemToContainer, addTextToElem } from './helpers';

function displayList(listToDisplay, page) {
  if (page === 'home' && todoDependencies.folders.length === 1) {
    loadElemToContainer('#content', 'div', `list-${page}`);
  } else if (page === 'folder' && listToDisplay.length < 1) {
    loadElemToContainer('#content', 'div', `list-${page}`);
  } else if (todoDependencies.currentFolder === 'Default') {
    loadElemToContainer('#content', 'div', `list-${page}`);
  }

  listToDisplay.forEach((item) => {
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
  });
}

function nameOfListToDisplay(folderName, page) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, page);
    }
  });
}

export { displayList, nameOfListToDisplay };
