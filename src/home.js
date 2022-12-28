import { todoDependencies } from "./index.js";
import { clearDisplay } from "./helpers.js";
import {
  Folder,
  createFolder,
  showFolders,
  deleteFolder,
  listOfTodosToDisplay
} from './folder.js';
import {
  displayFolderPage,
  displayHomePage,
  displayList,
  nameOfListToDisplay
} from './display.js'
import { createTodo } from "./todo.js";

function homeFolderFunctionality() {
  const folderAddBtn = document.querySelector('#folder-add-home-btn');
  const newFolderInp = document.querySelector('#folder-title-home')

  folderAddBtn.addEventListener('click', () => {
    createFolder(newFolderInp.value)
    clearDisplay('#list-home')
    // see wassup here
    displayList(todoDependencies.folders, 'home')
    newFolderInp.value = ''

    console.log(todoDependencies.folders, 'folders')
    console.log(todoDependencies.defaultFolder, 'default folder')
  })
}

function folderDivAsButton(folder) {
  let div = document.querySelector(`#list-home-${folder}-div`)
  div.addEventListener('click', () => {
    clearDisplay('#content')
    displayFolderPage(folder)
  })
}

function homeAddTodo() {
  const todoAddBtn = document.querySelector('#todo-add-home-btn');

  const newTodoTitle = document.querySelector('#todo-title-home')
  const newTodoDueDate = document.querySelector('#todo-duedate-home')
  const newTodoPriority = document.querySelector('#todo-priority-home')
  const newTodoDescription = document.querySelector('#todo-description-home')

  todoAddBtn.addEventListener('click', () => {
    createTodo(
      `${newTodoTitle.value}`,
      `${newTodoDescription.value}`,
      `${newTodoDueDate.value}`,
      `${newTodoPriority.value}`,
      'Default'
    )
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';

    console.log(todoDependencies.folders, 'folders')
    console.log(todoDependencies.defaultFolder, 'default folder')
  })
}

export {
  homeFolderFunctionality,
  folderDivAsButton,
  homeAddTodo
}
