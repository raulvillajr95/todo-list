import { todoDependencies } from "./index.js";
import { createTodo, deleteTodo, showTodo, todoObj } from "./todo.js";
import { clearDisplay } from "./helpers.js";
import { 
  displayFolderPage,
  displayList,
  displayTodoPage
} from './display.js'

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
      todoDivAsButton()
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

function todoDivAsButton() {
  const listFolder = document.querySelector('#list-folder')
  const folderTitle = document.querySelector('#folder-title')

  for (let i = 0; i < listFolder.children.length; i++) {
    listFolder.children[i].children[0].addEventListener('click', () => {
      clearDisplay('#content')
      displayTodoPage(listFolder.children[i].children[0].textContent)
    })

    listFolder.children[i].children[1].addEventListener('click', () => {
      let todo = todoObj(listFolder.children[i].children[0].textContent)
      deleteTodo(
        todo.title,
        todo.dueDate,
        todo.priority
      )
      let folder = folderTitle.textContent;
      clearDisplay('#content')
      displayFolderPage(folder)

      console.log(todoDependencies.folders, 'folders')
      console.log(todoDependencies.defaultFolder, 'default folder')
    })
  }
}

export { 
  Folder,
  createFolder,
  showFolders,
  deleteFolder,
  listOfTodosToDisplay,
  pageFormAddTodo
}