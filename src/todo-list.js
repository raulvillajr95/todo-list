import { format, parseISO } from 'date-fns';
import todoDependencies from './dependencies';
import {
  displayFolderForm,
  displayTitle,
  displayTodoForm,
  clearDisplay,
  todoDatePriority,
  displayDescription,
  formAddBtn,
} from './helpers';
import {
  displayList,
  displayFolderSelect,
  displayTodoEditBtn,
} from './display-helpers';
import {
  createFolder,
  listOfTodosToDisplay,
  deleteFolder,
  defaultFolderName,
  folderObj,
} from './folder-helpers';
import {
  createTodo,
  todoObj,
  deleteTodo,
  defaultTodoName,
  displayTodoEditPage,
} from './todo-helpers';
// import { populateDependencies, populateStorage } from './local-storage';

class TodoList {
  constructor() {
    this.folder = '';
  }

  // Home page
  homePage() {
    // populateDependencies();
    // Home page elements
    clearDisplay('#content');
    displayTitle('home', 'Todo List');
    displayTodoForm('home');
    displayFolderSelect(todoDependencies.folders);
    formAddBtn('home');
    displayList(todoDependencies.folders, 'home');
    displayFolderForm();

    // Add todo to desired folder from home page
    const todoAddHomeBtn = document.querySelector('#todo-add-home-btn');
    todoAddHomeBtn.addEventListener('click', () => {
      const todoTitleHome = document.querySelector('#todo-title-home');
      const todoDuedateHome = document.querySelector('#todo-duedate-home');
      const todoPriorityHome = document.querySelector('#todo-priority-home');
      const todoDescriptionHome = document.querySelector(
        '#todo-description-home'
      );
      const todoFolderHome = document.querySelector('#todo-folder-home');
      createTodo(
        todoTitleHome.value ? todoTitleHome.value : defaultTodoName(),
        todoDescriptionHome.value,
        todoDuedateHome.value
          ? format(parseISO(todoDuedateHome.value), 'PP')
          : format(new Date(), 'PP'),
        todoPriorityHome.value ? todoPriorityHome.value : '0',
        Number(todoFolderHome.value)
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
      createFolder(
        folderTitleHome.value ? folderTitleHome.value : defaultFolderName()
      );
      this.homePage();

      // Click on folders in home page, after folder add btn
      const listHome = document.querySelector('#list-home');
      for (let i = 0; i < listHome.children.length; i += 1) {
        // Click on letters, enter folder page
        listHome.children[i].children[0].addEventListener('click', () => {
          const folderId = Number(
            listHome.children[i].children[0].dataset.folderId
          );
          this.folderPage(folderId);
        });
      }

      // Home folders DEL btn
      const listHomeDiv = document.querySelector('#list-home');
      for (let i = 0; i < listHomeDiv.children.length; i += 1) {
        if (listHomeDiv.children[i].children[0].textContent !== 'Default') {
          listHomeDiv.children[i].children[1].addEventListener('click', () => {
            const folderRemoveId =
              listHomeDiv.children[i].children[0].dataset.folderId;
            deleteFolder(Number(folderRemoveId));
            this.homePage();
          });
        }
      }
    });

    // Click on folders in home page, after first homePage load
    const listHome = document.querySelector('#list-home');
    for (let i = 0; i < listHome.children.length; i += 1) {
      // Click on letters, enter folder page
      listHome.children[i].children[0].addEventListener('click', () => {
        const folderId = Number(
          listHome.children[i].children[0].dataset.folderId
        );
        this.folderPage(folderId);
      });
    }

    // Home folders DEL btn
    const listHomeDiv = document.querySelector('#list-home');
    for (let i = 0; i < listHomeDiv.children.length; i += 1) {
      if (listHomeDiv.children[i].children[0].textContent !== 'Default') {
        listHomeDiv.children[i].children[1].addEventListener('click', () => {
          const folderRemoveId =
            listHomeDiv.children[i].children[0].dataset.folderId;
          deleteFolder(Number(folderRemoveId));
          this.homePage();
        });
      }
    }
  }

  // Folder page
  folderPage(folderId) {
    this.folder = folderId;
    const folder = folderObj(folderId);
    clearDisplay('#content');
    displayTitle('folder', folder.name);
    displayTodoForm('folder');
    listOfTodosToDisplay(folder.folderId);

    // Open todo from folder page
    const listFolderDiv = document.querySelector('#list-folder');
    for (let i = 0; i < listFolderDiv.children.length; i += 1) {
      listFolderDiv.children[i].children[0].addEventListener('click', () => {
        const todoId = Number(
          listFolderDiv.children[i].children[0].dataset.todoId
        );
        this.todoPage(todoObj(todoId));
      });
    }

    // Folder todo's DEL btn
    for (let i = 0; i < listFolderDiv.children.length; i += 1) {
      listFolderDiv.children[i].children[2].addEventListener('click', () => {
        const todoId = Number(
          listFolderDiv.children[i].children[0].dataset.todoId
        );
        const todoAsObj = todoObj(todoId);
        deleteTodo(todoAsObj.todoId);
        this.folderPage(this.folder);
      });
    }

    // Create todo, within folder page(ADD btn)
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
        todoTitleFolder.value ? todoTitleFolder.value : defaultTodoName(),
        todoDescriptionFolder.value,
        todoDuedateFolder.value
          ? format(parseISO(todoDuedateFolder.value), 'PP')
          : format(new Date(), 'PP'),
        todoPriorityFolder.value ? todoPriorityFolder.value : '0',
        folderId
      );
      console.log(todoDependencies.defaultFolder, 'deF from ADD');
      console.log(todoDependencies.folders, 'folders from ADD');
      todoTitleFolder.value = '';
      todoDuedateFolder.value = '';
      todoPriorityFolder.value = '';
      todoDescriptionFolder.value = '';

      clearDisplay('#list-folder');
      console.log(folderId, 'folderId');
      listOfTodosToDisplay(folderId);
      // Open todo from folder page
      for (let i = 0; i < listFolderDiv.children.length; i += 1) {
        listFolderDiv.children[i].children[0].addEventListener('click', () => {
          const todoId = Number(
            listFolderDiv.children[i].children[0].dataset.todoId
          );
          this.todoPage(todoObj(todoId));
        });
      }

      // Folder todo's DEL btn
      for (let i = 0; i < listFolderDiv.children.length; i += 1) {
        listFolderDiv.children[i].children[2].addEventListener('click', () => {
          const todoId = Number(
            listFolderDiv.children[i].children[0].dataset.todoId
          );
          const todoAsObj = todoObj(todoId);
          deleteTodo(todoAsObj.todoId);
          this.folderPage(this.folder);
        });
      }
    });

    // Back button, within folder page
    const folderBackBtn = document.querySelector('#folder-back-btn');
    folderBackBtn.addEventListener('click', () => {
      this.homePage();
    });
  }

  // Todo Page
  todoPage(currentObj) {
    clearDisplay('#content');
    displayTitle('todo', currentObj.title);
    todoDatePriority(currentObj.dueDate, currentObj.priority);
    displayDescription(currentObj.description);
    displayTodoEditBtn();

    // Back button, within todo page
    const todoBackBtn = document.querySelector('#todo-back-btn');
    todoBackBtn.addEventListener('click', () => {
      this.folderPage(this.folder);
    });

    // Edit button, within todo page
    const todoEditBtn = document.querySelector('#todo-edit-btn');
    todoEditBtn.addEventListener('click', () => {
      this.todoEditPage(currentObj);
    });
  }

  // Todo edit page
  todoEditPage(currentTodo) {
    const objToEdit = currentTodo;
    clearDisplay('#content');
    displayTodoEditPage(currentTodo);

    // Edit page 'SAVE' btn
    const todoEditTitle = document.querySelector('#todo-edit-title');
    const todoEditDuedate = document.querySelector('#todo-edit-duedate');
    const todoEditPriority = document.querySelector('#todo-edit-priority');
    const todoEditDescription = document.querySelector(
      '#todo-edit-description'
    );
    const todoEditPageSaveBtn = document.querySelector(
      '#todo-edit-page-save-btn'
    );
    todoEditPageSaveBtn.addEventListener('click', () => {
      objToEdit.title = todoEditTitle.value;
      objToEdit.dueDate = format(parseISO(todoEditDuedate.value), 'PP');
      objToEdit.priority = todoEditPriority.value;
      objToEdit.description = todoEditDescription.value;
      this.todoPage(currentTodo);
    });
  }
}

export default TodoList;
