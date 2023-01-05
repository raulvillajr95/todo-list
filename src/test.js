import todoDependencies from './dependencies';
import {
  displayFolderForm,
  displayTitle,
  displayTodoForm,
  clearDisplay,
} from './helpers';
import { displayList } from './display-helpers';
import { createFolder, listOfTodosToDisplay } from './folder-helpers';
// import app from '.';
import { createTodo } from './todo-helpers';

/**
 * tries to remove cycle dependency:
 * extract folderBackBtn from folder-page to here
 * create a homePage copy here, call it homePageCopy
 *
 * combine home-page into a class??
 *  have homePage & folderPage as methods??
 *  right here in todo, create a few functions
 *  where homePage() & folder page go, I can use this.start(), this.folder..etc.
 */

function TodoList() {
  // Testing...
  const keys = () => {
    this.phone('shoes');
  };
  const phone = (item) => {
    console.log(item);
  };

  const home = () => {
    clearDisplay('#content');
    displayTitle('home', 'Todo List');
    displayTodoForm('home');
    displayList(todoDependencies.folders, 'home');
    displayFolderForm();

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
          clearDisplay('#content');
          // folderPage(folderClicked);

          // testing...
          this.folder(folderClicked);
        });
      }
    });

    // Click on folders in home page, after first homePage load
    const listHome = document.querySelector('#list-home');
    for (let i = 0; i < listHome.children.length; i += 1) {
      // Click on letters, enter folder page
      listHome.children[i].children[0].addEventListener('click', () => {
        const folderClicked = listHome.children[i].children[0].textContent;
        clearDisplay('#content');
        // folderPage(folderClicked);

        // testing...
        this.folder(folderClicked);
      });
    }
  };

  const folder = (folderName) => {
    displayTitle('folder', folderName);
    displayTodoForm('folder');
    listOfTodosToDisplay(folderName);

    // Create todo
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
      clearDisplay('#list-folder');
      listOfTodosToDisplay('Default');
      todoTitleFolder.value = '';
      todoDuedateFolder.value = '';
      todoPriorityFolder.value = '';
      todoDescriptionFolder.value = '';
    });

    // Back button
    const folderBackBtn = document.querySelector('#folder-back-btn');
    folderBackBtn.addEventListener('click', () => {
      console.log('yayo');
      // homePage();

      // testing...
      this.home();
    });
  };

  return {
    home,
    folder,
    phone,
    keys,
  };
}

export default TodoList;
