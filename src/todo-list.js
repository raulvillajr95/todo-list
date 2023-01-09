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
} from './folder-helpers';
import {
  createTodo,
  todoObj,
  deleteTodo,
  defaultTodoName,
  displayTodoEditPage,
} from './todo-helpers';

class TodoList {
  constructor() {
    this.folder = '';
  }

  // Home page
  homePage() {
    // Home page elements
    clearDisplay('#content');
    displayTitle('home', 'Todo List');
    displayTodoForm('home');
    displayFolderSelect(todoDependencies.folders);
    formAddBtn('home');
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
      const todoFolderHome = document.querySelector('#todo-folder-home');
      createTodo(
        todoTitleHome.value ? todoTitleHome.value : defaultTodoName(),
        todoDescriptionHome.value,
        todoDuedateHome.value
          ? format(parseISO(todoDuedateHome.value), 'PP')
          : format(new Date(), 'PP'),
        todoPriorityHome.value ? todoPriorityHome.value : '0',
        todoFolderHome.value
      );
      console.log(todoFolderHome.value, 'dd');
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
      clearDisplay('#list-home');
      displayList(todoDependencies.folders, 'home');
      // Remove folder label and select before updating
      document.querySelector('#todo-folder-home-label').remove();
      document.querySelector('#todo-folder-home').remove();
      document.querySelector('#todo-add-home-btn').remove();
      displayFolderSelect(todoDependencies.folders);
      formAddBtn('home');
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

      // Home folders DEL btn
      const listHomeDiv = document.querySelector('#list-home');
      for (let i = 0; i < listHomeDiv.children.length; i += 1) {
        if (listHomeDiv.children[i].children[0].textContent !== 'Default') {
          listHomeDiv.children[i].children[1].addEventListener('click', () => {
            const folderRemoveName =
              listHomeDiv.children[i].children[0].textContent;
            deleteFolder(folderRemoveName);
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
        const folderClicked = listHome.children[i].children[0].textContent;
        this.folderPage(folderClicked);
      });
    }

    // Home folders DEL btn
    const listHomeDiv = document.querySelector('#list-home');
    for (let i = 0; i < listHomeDiv.children.length; i += 1) {
      if (listHomeDiv.children[i].children[0].textContent !== 'Default') {
        listHomeDiv.children[i].children[1].addEventListener('click', () => {
          const folderRemoveName =
            listHomeDiv.children[i].children[0].textContent;
          deleteFolder(folderRemoveName);
          this.homePage();
        });
      }
    }
  }

  // Folder page
  folderPage(folderName) {
    this.folder = folderName;
    clearDisplay('#content');
    displayTitle('folder', folderName);
    displayTodoForm('folder');
    listOfTodosToDisplay(folderName);

    // Open todo from folder page
    const listFolderDiv = document.querySelector('#list-folder');
    for (let i = 0; i < listFolderDiv.children.length; i += 1) {
      listFolderDiv.children[i].children[0].addEventListener('click', () => {
        const todoClicked = listFolderDiv.children[i].children[0].textContent;
        this.todoPage(todoObj(todoClicked));
      });
    }

    // Folder todo's DEL btn
    for (let i = 0; i < listFolderDiv.children.length; i += 1) {
      listFolderDiv.children[i].children[2].addEventListener('click', () => {
        const todoClicked = listFolderDiv.children[i].children[0].textContent;
        const todoAsObj = todoObj(todoClicked);
        deleteTodo(todoAsObj.title, todoAsObj.dueDate, todoAsObj.priority);
        const folderTitle = document.querySelector('#folder-title');
        this.folderPage(folderTitle.textContent);
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
        todoTitleFolder.value ? todoTitleFolder.value : defaultTodoName(),
        todoDescriptionFolder.value,
        todoDuedateFolder.value
          ? format(parseISO(todoDuedateFolder.value), 'PP')
          : format(new Date(), 'PP'),
        todoPriorityFolder.value ? todoPriorityFolder.value : '0',
        folderName
      );
      todoTitleFolder.value = '';
      todoDuedateFolder.value = '';
      todoPriorityFolder.value = '';
      todoDescriptionFolder.value = '';

      clearDisplay('#list-folder');
      listOfTodosToDisplay(folderName);
      // Open todo from folder page
      for (let i = 0; i < listFolderDiv.children.length; i += 1) {
        listFolderDiv.children[i].children[0].addEventListener('click', () => {
          const todoClicked = listFolderDiv.children[i].children[0].textContent;
          this.todoPage(todoObj(todoClicked));
        });
      }

      // Folder todo's DEL btn
      for (let i = 0; i < listFolderDiv.children.length; i += 1) {
        listFolderDiv.children[i].children[2].addEventListener('click', () => {
          const todoClicked = listFolderDiv.children[i].children[0].textContent;
          const todoAsObj = todoObj(todoClicked);
          deleteTodo(todoAsObj.title, todoAsObj.dueDate, todoAsObj.priority);
          const folderTitle = document.querySelector('#folder-title');
          this.folderPage(folderTitle.textContent);
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
      this.todoEditPage();
    });
  }

  // Todo edit page
  todoEditPage() {
    const todoTitle = document.querySelector('#todo-title');
    const objToEdit = todoObj(todoTitle.textContent);
    clearDisplay('#content');
    displayTodoEditPage(objToEdit);

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
      console.log(todoEditTitle.value);
      console.log(todoEditDuedate.value);
      console.log(todoEditPriority.value);
      console.log(todoEditDescription.value);
      objToEdit.title = todoEditTitle.value;
      objToEdit.dueDate = format(parseISO(todoEditDuedate.value), 'PP');
      objToEdit.priority = todoEditPriority.value;
      objToEdit.description = todoEditDescription.value;
      console.log(objToEdit);
      // Just test logging results
      console.log(todoDependencies.defaultFolder, 'default folders');
      console.log(todoDependencies.folders, 'folders');
      this.todoPage(objToEdit);
    });
  }
}

export default TodoList;
