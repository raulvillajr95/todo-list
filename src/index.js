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
const backBtn = document.querySelector('#folder-back-btn');
const folderAddBtn = document.querySelector('#folder-add-home-btn');
const newFolderInp = document.querySelector('#folder-title-home');
const currentFolderTitle = document.querySelector('#folder-title');
const listFolder = document.querySelector('#list-folder');
const folderTitle = document.querySelector('#folder-title');

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
    listHome.children[i].children[0].addEventListener('click', () => {
      const folder = listHome.children[i].children[0].textContent;
      clearDisplay('#content');
      todoDependencies.currentFolder = folder;
      displayTitle('folder', folder);
      displayTodoForm('folder');
      nameOfListToDisplay(folder, 'folder');
      pageFormAddTodo('folder'); // not in good modules
      backBtn.addEventListener('click', () => {
        clearDisplay('#content');
        if (todoDependencies.folders.length === 1) {
          displayTitle('home', 'Todo List');
          displayTodoForm('home');
          displayList(todoDependencies.folders, 'home');
          displayFolderForm();
          folderAddBtn.addEventListener('click', () => {
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
          folderAddBtn.addEventListener('click', () => {
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

          folderAddBtn.addEventListener('click', () => {
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
      folderAddBtn.addEventListener('click', () => {
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
      folderAddBtn.addEventListener('click', () => {
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
console.log('display 1');
console.log('display 2');
// listHome = document.querySelector('#list-home');
// backBtn = document.querySelector('#folder-back-btn');
// folderAddBtn = document.querySelector('#folder-add-home-btn');
// newFolderInp = document.querySelector('#folder-title-home');
// currentFolderTitle = document.querySelector('#folder-title');
// listFolder = document.querySelector('#list-folder');
// folderTitle = document.querySelector('#folder-title');
console.log(folderAddBtn);
// folderAddBtn.addEventListener('click', () => {
//   createFolder(newFolderInp.value);
//   clearDisplay('#list-home');
//   // see wassup here
//   displayList(todoDependencies.folders, 'home');
//   folderDivAsButton(); // not in good modules
//   newFolderInp.value = '';
// });
console.log('display 3');
pageFormAddTodo('home');
folderDivAsButton(); // not in good modules

// s1, create a folder ✅
// createFolder('Groceries')
// s2, create folder, create todo ✅
// createFolder('School')
// createTodo(
//   'Pencils',
//   'No.2 pencils needed for math',
//   '01-08-2023',
//   1,
//   'School'
// )
// s3, create todo(adds to default folder) ✅
// createTodo(
//   'Gas',
//   'Grab gas this Tuesday',
//   '12-27-2022',
//   2,
// )
// s4, view all folders created ✅
// showFolders()
// s5, create 3 todo's in 1 folder, view all todo's in that 1 folder ✅
// createFolder('Appliances')
// createTodo(
//   'Refrigerator',
//   'Three door fridge',
//   '12-25-2022',
//   1,
//   'Appliances'
// )
// createTodo(
//   'Microwave',
//   'Small microwave',
//   '1-10-2022',
//   1,
//   'Appliances'
// )
// createTodo(
//   'Shaker',
//   '1 liter smoothie shaker',
//   '12-30-2022',
//   1,
//   'Appliances'
// )
// showTodos('Appliances')
// s6, view 1 todo ✅
// showTodo('Microwave')
// s7, delete single todo ✅
// deleteTodo(
//   'Shaker',
//   '12-30-2022',
//   1
// )
// s8, delete whole folder and its todo's ✅
// deleteFolder('School')

/**
 * work on cycle dependencies
 *  get rid of functions that are needed
 *    specially if they're only used a few times
 *    just duplicat content
 * rename module to make sense
 * add eslint and maybe prettier
 *  main errors:
 *    dependency cycle
 *    import format
 * refactor code to not use outside sources
 * - if anything, only todo dependencies
 * create a function that checks if div exists through id
 * need a way to know if todo is added from home when clicking on default
 *  maybe mess with home add btn
 *  or default folder div
 *    when clicked, if default is the only folder && there's 1 todo,
 *      add a 'list-folder' div??
 * refactor code
 *  display functions can be reusable
 *  like
 * create function that displays note page
 *  1 param, todo object
 *    from their grab title, dueDate, priority, & description
 * have a the same s8 sequence, but with ui
 * add dates to note
 *  use date-fns
 *  just date for now, no time
 * add preselected dueDate as today
 * add way to edit
 *  folder names
 *  todo names, dueDate, priority, description
 *
 * Bugs:
 * in todo forms,
 *  if title empty, don't add todo
 * adding note inside default page, don't add double todos to default folder
 * when adding folders in home page, you add name with spaces like 'ca sio'
 * i'm not able to read todos with the same name,
 *  todoObj reads them all from default folder
 *  then need to be read from the specific folder
 *  even then, within a folder you can't have diffirent names
 *  possibly check with name, dueDate, priority, and desc
 *    instead of just name
 * might need to be able to have same named folders, also todo's
 * when clicking on divs, it's the whole div
 *  it shouldn't include the DEL button
 * when default todo is added from home page,
 *  then you click on default folder, todos don't have clicks
 * when in folder and I add todo's
 *  extra 'list-folder' divs are added
 * when multiple todos deleted in folder,
 *  can only delete 1
 *  all other become unclickable
 *
 * notes:
 * -todos need to be objects, kinda like the 'books'
 *  preset for library
 * -have folders of 'todo's
 * -have a module file for each thing
 * -ui should be able to:
 *    view of multiple folders
 *    view of multiple 'todo's
 *    view 1 full todo
 *    delete todo
 *    delete folder
 * -modeled liked iOS Reminders but simpler
 * -use date-fns library
 * -use localStorage to save to local browser
 *
 * later:
 * use 'enter' key to add and stuff
 * use date-fns library
 * use localStorage
 * refactor code & fix bugs
 * improve it UI/UX wise, heavy on css
 * remove dev mode
 * do 10 exercises in each, Exercism, CodeWars, & HackerRank
 */
