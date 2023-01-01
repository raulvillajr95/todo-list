import todoDependencies from './dependencies';
import { nameOfListToDisplay } from './display-helpers';
import {
  displayTitle,
  displayTodoForm,
  clearDisplay,
  loadElemToContainer,
} from './helpers';
import {
  pageFormAddTodo,
  folderBackBtn,
  todoDivAsButton,
} from './folder-actions';

function todoBackBtn() {
  const backBtn = document.querySelector('#todo-back-btn');
  backBtn.addEventListener('click', () => {
    clearDisplay('#content');
    const folder = todoDependencies.currentFolder;
    displayTitle('folder', folder);
    displayTodoForm('folder');
    loadElemToContainer('#content', 'div', 'list-folder');
    //
    nameOfListToDisplay(folder, 'folder');
    pageFormAddTodo('folder');
    folderBackBtn();
    todoDivAsButton();
  });
}

export default todoBackBtn;
