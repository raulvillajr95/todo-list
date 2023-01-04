import todoDependencies from './dependencies';
import { loadElemToContainer, addTextToElem } from './helpers';

function listElemExists(page) {
  const contentDiv = document.querySelector('#content');
  return `list-${page}` in contentDiv.children;
}

function displayList(listToDisplay, page) {
  console.log('displayList 1');
  // if (page === 'home' && todoDependencies.folders.length === 1) {
  //   console.log('under 1');
  //   loadElemToContainer('#content', 'div', `list-${page}`);
  // } else if (page === 'folder' && listToDisplay.length < 1) {
  //   console.log('under 2');
  //   loadElemToContainer('#content', 'div', `list-${page}`);
  // } else if (todoDependencies.currentFolder === 'Default') {
  //   console.log('under 3');
  //   loadElemToContainer('#content', 'div', `list-${page}`);
  // }

  // still working on this code
  if (!listElemExists(page)) {
    loadElemToContainer('#content', 'div', `list-${page}`);
  }

  console.log('displayList 2');
  for (let i = 0; i < listToDisplay.length; i += 1) {
    console.log('displayList 3');
    const item = listToDisplay[i];

    let name;
    if (page === 'home') {
      name = item.name;
      console.log('displayList 4');
    } else if (page === 'folder') {
      name = item.title;
    }
    console.log('displayList 5');
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

  // listToDisplay.forEach((item) => {
  //   let name;
  //   if (page === 'home') {
  //     name = item.name;
  //   } else if (page === 'folder') {
  //     name = item.title;
  //   }
  //   loadElemToContainer(`#list-${page}`, 'div', `list-${page}-${name}-div`);
  //   loadElemToContainer(
  //     `#list-${page}-${name}-div`,
  //     'span',
  //     `list-${page}-${name}-text`
  //   );
  //   addTextToElem(`#list-${page}-${name}-text`, `${name}`);
  //   if (!(item.name === 'Default' && page === 'home')) {
  //     loadElemToContainer(
  //       `#list-${page}-${name}-div`,
  //       'button',
  //       `list-${page}-${name}-del-btn`
  //     );
  //     addTextToElem(`#list-${page}-${name}-del-btn`, 'DEL');
  //   }
  // });
}

function nameOfListToDisplay(folderName, page) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, page);
    }
  });
}

export { displayList, nameOfListToDisplay };
