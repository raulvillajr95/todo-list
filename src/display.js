import { todoDependencies } from "./index.js";
import {
  clearDisplay,
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
} from "./helpers.js"
import {
  homeFolderFunctionality,
  folderDivAsButton,
} from "./home.js";
import {
  pageFormAddTodo,
  folderBackBtn
} from "./folder.js";
import {
  showTodo,
  todoBackBtn,
  todoObj,
} from "./todo.js";

function displayHomePage() {
  displayTitle('home', 'Todo List')
  displayTodoForm('home')
  displayList(todoDependencies.folders, 'home')
  displayFolderForm()
  homeFolderFunctionality()
  pageFormAddTodo('home')
  folderDivAsButton()
}

function displayTitle(page, title) {
  loadElemToContainer('#content', 'div', `${page}-title-div`)
  if (title !== 'Todo List') {
    loadElemToContainer(`#${page}-title-div`, 'button', `${page}-back-btn`)
    addTextToElem(`#${page}-back-btn`,'BACK')
  }
  loadElemToContainer(`#${page}-title-div`, 'h1', `${page}-title`)
  addTextToElem(`#${page}-title`, `${title}`)
}

function displayTodoForm(page) {
  loadElemToContainer('#content', 'div', `todo-form-${page}`)

  loadElemToContainer(`#todo-form-${page}`, 'label', `todo-title-${page}-label`)
  addAttributeToElem(`#todo-title-${page}-label`, 'for', `todo-title-${page}`)
  addTextToElem(`#todo-title-${page}-label`, 'Title')
  loadElemToContainer(`#todo-form-${page}`, 'input', `todo-title-${page}`)
  addAttributeToElem(`#todo-title-${page}`,'type','text')
  addAttributeToElem(`#todo-title-${page}`,'placeholder','New Todo')

  loadElemToContainer(`#todo-form-${page}`, 'label', `todo-duedate-${page}-label`)
  addAttributeToElem(`#todo-duedate-${page}-label`, 'for', `todo-duedate-${page}`)
  addTextToElem(`#todo-duedate-${page}-label`, 'Due date')
  loadElemToContainer(`#todo-form-${page}`, 'input', `todo-duedate-${page}`)
  addAttributeToElem(`#todo-duedate-${page}`,'type','date')
  addAttributeToElem(`#todo-duedate-${page}`,'placeholder','Due Date')

  loadElemToContainer(`#todo-form-${page}`, 'label', `todo-priority-${page}-label`)
  addAttributeToElem(`#todo-priority-${page}-label`, 'for', `todo-priority-${page}`)
  addTextToElem(`#todo-priority-${page}-label`, 'Priority')
  loadElemToContainer(`#todo-form-${page}`, 'select', `todo-priority-${page}`)
  addAttributeToElem(`#todo-priority-${page}`,'name',`todo-priority-${page}`)
  loadElemToContainer(`#todo-priority-${page}`, 'option', `todo-priority-${page}-low`)
  addAttributeToElem(`#todo-priority-${page}-low`, 'value', '0')
  addAttributeToElem(`#todo-priority-${page}-low`, 'selected', '')
  addTextToElem(`#todo-priority-${page}-low`, 'Low')
  loadElemToContainer(`#todo-priority-${page}`, 'option', `todo-priority-${page}-medium`)
  addAttributeToElem(`#todo-priority-${page}-medium`, 'value', '1')
  addTextToElem(`#todo-priority-${page}-medium`, 'Medium')
  loadElemToContainer(`#todo-priority-${page}`, 'option', `todo-priority-${page}-high`)
  addAttributeToElem(`#todo-priority-${page}-high`, 'value', '2')
  addTextToElem(`#todo-priority-${page}-high`, 'High')

  loadElemToContainer(`#todo-form-${page}`, 'label', `todo-description-${page}-label`)
  addAttributeToElem(`#todo-description-${page}-label`, 'for', `todo-description-${page}`)
  addTextToElem(`#todo-description-${page}-label`, 'Description')
  loadElemToContainer(`#todo-form-${page}`, 'input', `todo-description-${page}`)
  addAttributeToElem(`#todo-description-${page}`,'placeholder','Description')

  loadElemToContainer(`#todo-form-${page}`, 'button', `todo-add-${page}-btn`)
  addTextToElem(`#todo-add-${page}-btn`, 'ADD')
}

function displayList(listToDisplay, page) {
  if (page == 'home' && todoDependencies.folders.length == 1) {
    loadElemToContainer('#content', 'div', `list-${page}`)
  } else if (page == 'folder' && listToDisplay.length < 1) {
    loadElemToContainer('#content', 'div', `list-${page}`)
  }

  listToDisplay.forEach((item) => {
    let name;
    if (page == 'home') {
      name = item.name;
    } else if (page == 'folder') {
      name = item.title;
    }
    loadElemToContainer(`#list-${page}`, 'div', `list-${page}-${name}-div`)
    loadElemToContainer(`#list-${page}-${name}-div`, 'span', `list-${page}-${name}-text`)
    addTextToElem(`#list-${page}-${name}-text`, `${name}`)
    if (!(item.name == 'Default' && page == 'home')) {
      loadElemToContainer(`#list-${page}-${name}-div`, 'button', `list-${page}-${name}-del-btn`)
      addTextToElem(`#list-${page}-${name}-del-btn`, 'DEL')
    }
  })
}

function displayFolderForm() {
  loadElemToContainer('#content', 'div', 'folder-div-home')

  loadElemToContainer('#folder-div-home', 'label', 'folder-title-home-label')
  addAttributeToElem('#folder-title-home-label', 'for', 'folder-title-home')
  addTextToElem('#folder-title-home-label', 'Title')
  loadElemToContainer('#folder-div-home', 'input', 'folder-title-home')
  addAttributeToElem('#folder-title-home','type','text')
  addAttributeToElem('#folder-title-home','placeholder','New folder')

  loadElemToContainer('#folder-div-home', 'button', 'folder-add-home-btn')
  addTextToElem('#folder-add-home-btn', 'ADD')
}

function displayFolderPage(folder) {
  todoDependencies.currentFolder = folder;
  displayTitle('folder', folder)
  displayTodoForm('folder')
  nameOfListToDisplay(folder, 'folder')
  pageFormAddTodo('folder')
  folderBackBtn()
}

function nameOfListToDisplay(folderName, page) {
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderName) {
      displayList(currentFolder.folder, page)
    }
  })
}

function displayTodoPage(todoToDisplay) {
  let todo = todoObj(todoToDisplay)

  displayTitle('todo', todo.title)
  todoDatePriority(todo.dueDate, todo.priority)
  displayDescription(todo.description)
  todoBackBtn()
}

function todoDatePriority(dueDate, priorityVal) {
  loadElemToContainer('#content', 'div', 'todo-info-div')

  loadElemToContainer(`#todo-info-div`, 'h2', `todo-duedate`)
  addTextToElem(`#todo-duedate`, `Due date: ${dueDate}`)

  let priority;
  if (priorityVal == 0) {
    priority = 'low';
  } else if (priorityVal == 1) {
    priority = 'medium';
  } else if (priorityVal == 2) {
    priority = 'high';
  } 

  loadElemToContainer(`#todo-info-div`, 'h2', `todo-priority`)
  addTextToElem(`#todo-priority`, `Priority: ${priority}`)
}

function displayDescription(description) {
  loadElemToContainer(`#content`, 'p', `todo-description`)
  addTextToElem(`#todo-description`, `Description: ${description}`)
}

export {
  displayHomePage,
  displayList,
  displayFolderPage,
  nameOfListToDisplay,
  displayTodoPage,
  displayTitle,
  displayTodoForm,
  displayFolderForm
}