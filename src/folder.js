import { todoDependencies } from "./index.js";
import { createTodo } from "./todo.js";
import { clearDisplay } from "./helpers.js";
import { displayList } from './display.js'

class Folder{
  constructor(name) {
    this.name = name;
    this.folder = [];
  }

  addNote(note){
    this.folder.push(note)
  }

  showTodo(){
    this.folder.forEach((todo) => {
      console.log(todo)
    })
  }

}

function showFolders() {
  console.log(todoDependencies.folders)
}

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name))
}

function deleteFolder(folderToRemove) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderToRemove) {
      let index = todoDependencies.folders.indexOf(currentFolder)
      todoDependencies.folders.splice(index, 1)
      // console.log(index, 'deleteFolder')
    }
  })
}

function pageFormAddTodo(page) {
  const todoAddBtn = document.querySelector(`#todo-add-${page}-btn`);
  const currentFolderTitle = document.querySelector('#folder-title')

  const newTodoTitle = document.querySelector(`#todo-title-${page}`)
  const newTodoDueDate = document.querySelector(`#todo-duedate-${page}`)
  const newTodoPriority = document.querySelector(`#todo-priority-${page}`)
  const newTodoDescription = document.querySelector(`#todo-description-${page}`)

  todoAddBtn.addEventListener('click', () => {
    createTodo(
      `${newTodoTitle.value}`,
      `${newTodoDescription.value}`,
      `${newTodoDueDate.value}`,
      `${newTodoPriority.value}`,
      `${page == 'home' ? 'Default' : currentFolderTitle.textContent}`
    )
    if (page == 'folder') {
      clearDisplay('#list-folder')
      listOfTodosToDisplay(currentFolderTitle.textContent, 'folder')
    }
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';

    console.log(todoDependencies.folders, 'folders')
    console.log(todoDependencies.defaultFolder, 'default folder')
  })
}

function listOfTodosToDisplay(folderName, page) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, page)
    }
  })
}

export { 
  Folder,
  createFolder,
  showFolders,
  deleteFolder,
  listOfTodosToDisplay,
  pageFormAddTodo
}