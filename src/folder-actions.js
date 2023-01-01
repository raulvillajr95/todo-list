import todoDependencies from './dependencies';
import { createTodo, deleteTodo, todoObj } from './todo-helpers';
import {
  clearDisplay,
  loadElemToContainer,
  displayTitle,
  displayTodoForm,
  displayFolderForm,
} from './helpers';
import { displayFolderPage, displayTodoPage } from './display';
import { displayList } from './display-helpers';
import { homeFolderFunctionality, folderDivAsButton } from './home';
import displayHomePage from './index';
import { listOfTodosToDisplay } from './folder-helpers';

function todoDivAsButton() {
  const listFolder = document.querySelector('#list-folder');
  const folderTitle = document.querySelector('#folder-title');

  for (let i = 0; i < listFolder.children.length; i += 1) {
    listFolder.children[i].children[0].addEventListener('click', () => {
      clearDisplay('#content');
      displayTodoPage(listFolder.children[i].children[0].textContent);
    });

    listFolder.children[i].children[1].addEventListener('click', () => {
      const todo = todoObj(listFolder.children[i].children[0].textContent);
      deleteTodo(todo.title, todo.dueDate, todo.priority);
      const folder = folderTitle.textContent;
      clearDisplay('#content');
      displayFolderPage(folder);
    });
  }
}

// check this out for non functioning todo's
function pageFormAddTodo(page) {
  const todoAddBtn = document.querySelector(`#todo-add-${page}-btn`);
  const currentFolderTitle = document.querySelector('#folder-title');

  const newTodoTitle = document.querySelector(`#todo-title-${page}`);
  const newTodoDueDate = document.querySelector(`#todo-duedate-${page}`);
  const newTodoPriority = document.querySelector(`#todo-priority-${page}`);
  const newTodoDescription = document.querySelector(
    `#todo-description-${page}`
  );

  todoAddBtn.addEventListener('click', () => {
    createTodo(
      `${newTodoTitle.value}`,
      `${newTodoDescription.value}`,
      `${newTodoDueDate.value}`,
      `${newTodoPriority.value}`,
      `${page === 'home' ? 'Default' : currentFolderTitle.textContent}`
    );
    if (page === 'folder') {
      clearDisplay('#list-folder');
      listOfTodosToDisplay(currentFolderTitle.textContent, 'folder');
      todoDivAsButton();
    }
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';
  });
}

function folderBackBtn() {
  const backBtn = document.querySelector('#folder-back-btn');
  backBtn.addEventListener('click', () => {
    clearDisplay('#content');
    if (todoDependencies.folders.length === 1) {
      displayHomePage();
    } else {
      displayTitle('home', 'Todo List');
      displayTodoForm('home');
      loadElemToContainer('#content', 'div', 'list-home');
      displayList(todoDependencies.folders, 'home');
      displayFolderForm();
      homeFolderFunctionality();
      pageFormAddTodo('home');
      folderDivAsButton();
    }
  });
}

export { pageFormAddTodo, folderBackBtn, todoDivAsButton };
