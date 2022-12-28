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

function folderAddTodo() {
  const todoAddBtn = document.querySelector('#todo-add-folder-btn');
  const currentFolderTitle = document.querySelector('#folder-title')

  const newTodoTitle = document.querySelector('#todo-title-folder')
  const newTodoDueDate = document.querySelector('#todo-duedate-folder')
  const newTodoPriority = document.querySelector('#todo-priority-folder')
  const newTodoDescription = document.querySelector('#todo-description-folder')

  todoAddBtn.addEventListener('click', () => {
    createTodo(
      `${newTodoTitle.value}`,
      `${newTodoDescription.value}`,
      `${newTodoDueDate.value}`,
      `${newTodoPriority.value}`,
      `${currentFolderTitle.textContent}`
    )
    // createTodo('title', 'desc', 'dueD', 'prior', 'folder')
    clearDisplay('#list-folder')
    displayList(todoDependencies.folders[0].folder, 'folder')
    newTodoTitle.value = '';
    newTodoDueDate.value = '';
    newTodoPriority.value = '';
    newTodoDescription.value = '';

    console.log(todoDependencies.folders, 'folders')
    console.log(todoDependencies.defaultFolder, 'default folder')
  })
}

export { Folder, createFolder, showFolders, deleteFolder, folderAddTodo }