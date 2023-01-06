import todoDependencies from './dependencies';
import {
  displayFolderForm,
  displayTitle,
  displayTodoForm,
  clearDisplay,
} from './helpers';
import { displayList } from './display-helpers';
import { createFolder, listOfTodosToDisplay } from './folder-helpers';
import { createTodo, todoObj } from './todo-helpers';
import todoPage from './todo-page';

class TodoList {
  // Home page
  homePage() {
    clearDisplay('#content');
    displayTitle('home', 'Todo List');
    displayTodoForm('home');
    displayList(todoDependencies.folders, 'home');
    displayFolderForm();

    // Add todo to 'Default' folder from home page
    const todoAddHomeBtn = document.querySelector('#todo-add-home-btn');
    todoAddHomeBtn.addEventListener('click', () => {
      const todoTitleHome = document.querySelector('#todo-title-home');
      const todoDuedateHome = document.querySelector('#todo-duedate-home');
      const todoPriorityHome = document.querySelector('#todo-priority-home');
      const todoDescriptionHome = document.querySelector(
        '#todo-description-home'
      );
      createTodo(
        todoTitleHome.value,
        todoDescriptionHome.value,
        todoDuedateHome.value,
        todoPriorityHome.value
      );
      todoTitleHome.value = '';
      todoDuedateHome.value = '';
      todoPriorityHome.value = '';
      todoDescriptionHome.value = '';
    });

    // Home Folder Add Button, maybe make this a function
    const folderAddHomeBtn = document.querySelector('#folder-add-home-btn');
    folderAddHomeBtn.addEventListener('click', () => {
      const folderTitleHome = document.querySelector('#folder-title-home');
      createFolder(folderTitleHome.value);
      clearDisplay('#list-home');
      displayList(todoDependencies.folders, 'home');
      folderTitleHome.value = '';

      // Click on folders in home page, after folder add btn
      const listHome = document.querySelector('#list-home');
      for (let i = 0; i < listHome.children.length; i += 1) {
        // Click on letters, enter folder page
        listHome.children[i].children[0].addEventListener('click', () => {
          const folderClicked = listHome.children[i].children[0].textContent;
          this.folderPage(folderClicked);
        });
      }
    });

    // Click on folders in home page, after first homePage load
    const listHome = document.querySelector('#list-home');
    for (let i = 0; i < listHome.children.length; i += 1) {
      // Click on letters, enter folder page
      listHome.children[i].children[0].addEventListener('click', () => {
        const folderClicked = listHome.children[i].children[0].textContent;
        this.folderPage(folderClicked);
      });
    }
  }

  // Folder page
  folderPage(folderName) {
    clearDisplay('#content');
    displayTitle('folder', folderName);
    displayTodoForm('folder');
    listOfTodosToDisplay(folderName);

    // Give todo's click functionality, within folder page
    const listFolderDiv = document.querySelector('#list-folder');
    for (let i = 0; i < listFolderDiv.children.length; i += 1) {
      listFolderDiv.children[i].children[0].addEventListener('click', () => {
        const todoClicked = listFolderDiv.children[i].children[0].textContent;
        console.log(todoObj(todoClicked));
        todoPage(todoObj(todoClicked));
        // right here I can add todoPage() with obj param
      });
    }

    // Create todo, within folder page
    const todoAddFolderBtn = document.querySelector('#todo-add-folder-btn');
    todoAddFolderBtn.addEventListener('click', () => {
      const todoTitleFolder = document.querySelector('#todo-title-folder');
      const todoDuedateFolder = document.querySelector('#todo-duedate-folder');
      const todoPriorityFolder = document.querySelector(
        '#todo-priority-folder'
      );
      const todoDescriptionFolder = document.querySelector(
        '#todo-description-folder'
      );
      createTodo(
        todoTitleFolder.value,
        todoDescriptionFolder.value,
        todoDuedateFolder.value,
        todoPriorityFolder.value,
        folderName
      );
      todoTitleFolder.value = '';
      todoDuedateFolder.value = '';
      todoPriorityFolder.value = '';
      todoDescriptionFolder.value = '';
      clearDisplay('#list-folder');
      listOfTodosToDisplay(folderName);
      // Give todo's click functionality, within folder page
      for (let i = 0; i < listFolderDiv.children.length; i += 1) {
        listFolderDiv.children[i].children[0].addEventListener('click', () => {
          const todoClicked = listFolderDiv.children[i].children[0].textContent;
          console.log(todoObj(todoClicked));
          todoPage(todoObj(todoClicked));
          // right here I can add todoPage() with obj param
        });
      }
    });

    // Back button
    const folderBackBtn = document.querySelector('#folder-back-btn');
    folderBackBtn.addEventListener('click', () => {
      this.homePage();
    });
  }

  // Todo Page(manual info for now)
  // maybe a todoPage() method here
}

export default TodoList;
