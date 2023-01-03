import todoDependencies from './dependencies';
import { createTodo, deleteTodo, todoObj } from './todo-helpers';
import {
  clearDisplay,
  displayTitle,
  displayTodoForm,
  todoDatePriority,
  displayDescription,
  loadElemToContainer,
} from './helpers';
import { listOfTodosToDisplay } from './folder-helpers';
import { nameOfListToDisplay } from './display-helpers';
import folderBackBtn from './folder-back-btn';

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
    pageFormAddTodo('folder'); // not in good modules
    folderBackBtn(); // not in good modules
    const listFolder = document.querySelector('#list-folder');
    const folderTitle = document.querySelector('#folder-title');

    for (let i = 0; i < listFolder.children.length; i += 1) {
      listFolder.children[i].children[0].addEventListener('click', () => {
        clearDisplay('#content');
        const todo = todoObj(listFolder.children[i].children[0].textContent);
        displayTitle('todo', todo.title);
        todoDatePriority(todo.dueDate, todo.priority);
        displayDescription(todo.description);
        todoBackBtn(); // not in good modules
      });

      listFolder.children[i].children[1].addEventListener('click', () => {
        const todo = todoObj(listFolder.children[i].children[0].textContent);
        deleteTodo(todo.title, todo.dueDate, todo.priority);
        const folderTxt = folderTitle.textContent;
        clearDisplay('#content');
        todoDependencies.currentFolder = folderTxt;
        displayTitle('folder', folderTxt);
        displayTodoForm('folder');
        nameOfListToDisplay(folderTxt, 'folder');
        pageFormAddTodo('folder'); // not in good modules
        folderBackBtn(); // not in good modules
      });
    }
  });
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
      const listFolder = document.querySelector('#list-folder');
      const folderTitle = document.querySelector('#folder-title');

      for (let i = 0; i < listFolder.children.length; i += 1) {
        listFolder.children[i].children[0].addEventListener('click', () => {
          clearDisplay('#content');
          const todo = todoObj(listFolder.children[i].children[0].textContent);
          displayTitle('todo', todo.title);
          todoDatePriority(todo.dueDate, todo.priority);
          displayDescription(todo.description);
          todoBackBtn(); // not in good modules
        });

        listFolder.children[i].children[1].addEventListener('click', () => {
          const todo = todoObj(listFolder.children[i].children[0].textContent);
          deleteTodo(todo.title, todo.dueDate, todo.priority);
          const folder = folderTitle.textContent;
          clearDisplay('#content');
          todoDependencies.currentFolder = folder;
          displayTitle('folder', folder);
          displayTodoForm('folder');
          nameOfListToDisplay(folder, 'folder');
          pageFormAddTodo('folder'); // not in good modules
          folderBackBtn(); // not in good modules
        });
      }
    }
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';
  });
}

export default pageFormAddTodo;
