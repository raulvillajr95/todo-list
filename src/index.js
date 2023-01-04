import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import {
  displayTitle,
  displayTodoForm,
  displayFolderForm,
  clearDisplay,
  loadElemToContainer,
  todoDatePriority,
  displayDescription,
} from './helpers';
import { displayList, nameOfListToDisplay } from './display-helpers';
import {
  deleteFolder,
  createFolder,
  listOfTodosToDisplay,
} from './folder-helpers';
import { createTodo, deleteTodo, todoObj } from './todo-helpers';

// Display Home Page PT1
displayTitle('home', 'Todo List');
displayTodoForm('home');
displayList(todoDependencies.folders, 'home');
displayFolderForm();

// DOM
const listHome = document.querySelector('#list-home');
const folderAddBtn = document.querySelector('#folder-add-home-btn');
const newFolderInp = document.querySelector('#folder-title-home');
const currentFolderTitle = document.querySelector('#folder-title');
const listFolder = document.querySelector('#list-folder');
const folderTitle = document.querySelector('#folder-title');
const backBtn = document.querySelector('#folder-back-btn');

// Extra functions??
let todoBackBtn;
const todoBackBtn2 = (todoO) => {
  clearDisplay('#content');
  const todo = todoObj(todoO);
  displayTitle('todo', todo.title);
  todoDatePriority(todo.dueDate, todo.priority);
  displayDescription(todo.description);
  todoBackBtn(); // not in good modules
};
let pageFormAddTodo;
let folderBackBtn;
const folderBackBtn2 = (todoO, foldT) => {
  const todo = todoObj(todoO);
  deleteTodo(todo.title, todo.dueDate, todo.priority);
  const folder = foldT.textContent;
  clearDisplay('#content');
  todoDependencies.currentFolder = folder;
  displayTitle('folder', folder);
  displayTodoForm('folder');
  nameOfListToDisplay(folder, 'folder');
  pageFormAddTodo('folder'); // not in good modules
  folderBackBtn(); // not in good modules
};

// check this out for non functioning todo's
pageFormAddTodo = function (page) {
  const todoAddBtn = document.querySelector(`#todo-add-${page}-btn`);

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

      for (let i = 0; i < listFolder.children.length; i += 1) {
        listFolder.children[i].children[0].addEventListener('click', () => {
          todoBackBtn2(listFolder.children[i].children[0].textContent);
        });

        listFolder.children[i].children[1].addEventListener('click', () => {
          folderBackBtn2(
            listFolder.children[i].children[0].textContent,
            folderTitle
          );
        });
      }
    }
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';
  });
};

// Calls itself
function folderDivAsButton() {
  // Gives home page folder buttons functionality
  for (let i = 0; i < listHome.children.length; i += 1) {
    console.log('folderDivAsButton');
    listHome.children[i].children[0].addEventListener('click', () => {
      const folder = listHome.children[i].children[0].textContent;
      clearDisplay('#content');
      todoDependencies.currentFolder = folder;
      displayTitle('folder', folder);
      displayTodoForm('folder');
      nameOfListToDisplay(folder, 'folder');
      pageFormAddTodo('folder'); // not in good modules
      document
        .querySelector('#folder-back-btn')
        .addEventListener('click', () => {
          clearDisplay('#content');
          if (todoDependencies.folders.length === 1) {
            displayTitle('home', 'Todo List');
            displayTodoForm('home');
            displayList(todoDependencies.folders, 'home');
            displayFolderForm();
            console.log('folder add 1');
            console.log(folderAddBtn);
            folderAddBtn.addEventListener('click', () => {
              console.log('folder add 2');
              console.log(folderAddBtn);
              createFolder(newFolderInp.value);
              clearDisplay('#list-home');
              // see wassup here
              displayList(todoDependencies.folders, 'home');
              folderDivAsButton(); // not in good modules
              newFolderInp.value = '';
            });
            pageFormAddTodo('home');
            folderDivAsButton(); // not in good modules
          } else {
            displayTitle('home', 'Todo List');
            displayTodoForm('home');
            loadElemToContainer('#content', 'div', 'list-home');
            displayList(todoDependencies.folders, 'home');
            displayFolderForm();
            console.log('folder add 3');
            console.log(folderAddBtn);
            folderAddBtn.addEventListener('click', () => {
              console.log('folder add 4');
              console.log(folderAddBtn);
              createFolder(newFolderInp.value);
              clearDisplay('#list-home');
              // see wassup here
              displayList(todoDependencies.folders, 'home');
              folderDivAsButton(); // not in good modules
              newFolderInp.value = '';
            });
            pageFormAddTodo('home'); // not in good modules
            folderDivAsButton(); // not in good modules
          }
        });
    });
    if (listHome.children[i].children[1] !== undefined) {
      console.log('idk??');
      listHome.children[i].children[1].addEventListener('click', () => {
        const folder = listHome.children[i].children[0].textContent;
        deleteFolder(folder);
        if (todoDependencies.folders.length >= 2) {
          clearDisplay('#list-home');
          displayList(todoDependencies.folders, 'home');
          folderDivAsButton(); // not in good modules
        } else {
          clearDisplay('#content');
          displayTitle('home', 'Todo List');
          displayTodoForm('home');
          displayList(todoDependencies.folders, 'home');
          displayFolderForm();
          console.log('folder add 5');
          console.log(folderAddBtn);
          folderAddBtn.addEventListener('click', () => {
            console.log('folder add 6');
            console.log(folderAddBtn);
            createFolder(newFolderInp.value);
            clearDisplay('#list-home');
            // see wassup here
            displayList(todoDependencies.folders, 'home');
            folderDivAsButton(); // not in good modules
            newFolderInp.value = '';
          });
          pageFormAddTodo('home');
          folderDivAsButton(); // not in good modules
        }
      });
    }
  }
}

folderBackBtn = function () {
  backBtn.addEventListener('click', () => {
    clearDisplay('#content');
    if (todoDependencies.folders.length === 1) {
      displayTitle('home', 'Todo List');
      displayTodoForm('home');
      displayList(todoDependencies.folders, 'home');
      displayFolderForm();
      console.log('folder add 7');
      console.log(folderAddBtn);
      folderAddBtn.addEventListener('click', () => {
        console.log('folder add 8');
        console.log(folderAddBtn);
        createFolder(newFolderInp.value);
        clearDisplay('#list-home');
        // see wassup here
        displayList(todoDependencies.folders, 'home');
        folderDivAsButton(); // not in good modules
        newFolderInp.value = '';
      });
      pageFormAddTodo('home');
      folderDivAsButton(); // not in good modules
    } else {
      displayTitle('home', 'Todo List');
      displayTodoForm('home');
      loadElemToContainer('#content', 'div', 'list-home');
      displayList(todoDependencies.folders, 'home');
      displayFolderForm();
      console.log('folder add 9');
      console.log(folderAddBtn);
      folderAddBtn.addEventListener('click', () => {
        console.log('folder add 10');
        console.log(folderAddBtn);
        createFolder(newFolderInp.value);
        clearDisplay('#list-home');
        // see wassup here
        displayList(todoDependencies.folders, 'home');
        folderDivAsButton(); // not in good modules
        newFolderInp.value = '';
      });
      pageFormAddTodo('home'); // not in good modules
      folderDivAsButton(); // not in good modules
    }
  });
};

// Calls itself
todoBackBtn = function () {
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
};

// Display Home Page PT2
// folderAddBtn = document.querySelector('#folder-add-home-btn');
console.log(folderAddBtn);
pageFormAddTodo('home');
console.log(document.querySelector('#list-home-Default-text'));
folderDivAsButton(); // not in good modules
