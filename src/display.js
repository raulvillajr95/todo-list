import { todoDependencies } from "./index.js";
import {
  clearDisplay,
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
} from "./helpers.js"

function displayHome() {
  displayTitle()
  displayTodoForm()
  displayFolders(todoDependencies.folders)
  displayFolderForm()
}

function displayTitle() {
  loadElemToContainer('#content', 'h1', 'app-title')
  addTextToElem('#app-title', 'Todo List')
}

function displayTodoForm() {
  // make priority select, 'low', 'medium', 'high'
  loadElemToContainer('#content', 'form', 'todo-form-home')

  loadElemToContainer('#todo-form-home', 'label', 'todo-title-home-label')
  addAttributeToElem('#todo-title-home-label', 'for', 'todo-title-home')
  addTextToElem('#todo-title-home-label', 'Title')
  loadElemToContainer('#todo-form-home', 'input', 'todo-title-home')
  addAttributeToElem('#todo-title-home','type','text')
  addAttributeToElem('#todo-title-home','placeholder','New Todo')

  loadElemToContainer('#todo-form-home', 'label', 'todo-duedate-home-label')
  addAttributeToElem('#todo-duedate-home-label', 'for', 'todo-duedate-home')
  addTextToElem('#todo-duedate-home-label', 'Due date')
  loadElemToContainer('#todo-form-home', 'input', 'todo-duedate-home')
  addAttributeToElem('#todo-duedate-home','type','date')
  addAttributeToElem('#todo-duedate-home','placeholder','Due Date')

  loadElemToContainer('#todo-form-home', 'label', 'todo-priority-home-label')
  addAttributeToElem('#todo-priority-home-label', 'for', 'todo-priority-home')
  addTextToElem('#todo-priority-home-label', 'Priority')
  loadElemToContainer('#todo-form-home', 'select', 'todo-priority-home')
  addAttributeToElem('#todo-priority-home','name','todo-priority-home')
  loadElemToContainer('#todo-priority-home', 'option', 'todo-priority-home-low')
  addAttributeToElem('#todo-priority-home-low', 'value', '0')
  addTextToElem('#todo-priority-home-low', 'Low')
  loadElemToContainer('#todo-priority-home', 'option', 'todo-priority-home-medium')
  addAttributeToElem('#todo-priority-home-medium', 'value', '1')
  addTextToElem('#todo-priority-home-medium', 'Medium')
  loadElemToContainer('#todo-priority-home', 'option', 'todo-priority-home-high')
  addAttributeToElem('#todo-priority-home-high', 'value', '2')
  addTextToElem('#todo-priority-home-high', 'High')

  loadElemToContainer('#todo-form-home', 'label', 'todo-description-home-label')
  addAttributeToElem('#todo-description-home-label', 'for', 'todo-description-home')
  addTextToElem('#todo-description-home-label', 'Description')
  loadElemToContainer('#todo-form-home', 'input', 'todo-description-home')
  addAttributeToElem('#todo-description-home','placeholder','Description')

  loadElemToContainer('#todo-form-home', 'button', 'todo-add-home')
  addTextToElem('#todo-add-home', 'ADD')
}

function displayFolders(foldersToDisplay) {
  loadElemToContainer('#content', 'ul', 'folders-home')
  foldersToDisplay.forEach((folder) => {
    loadElemToContainer('#folders-home', 'li', `folders-home-${folder.name}`)
    addTextToElem(`#folders-home-${folder.name}`, `${folder.name}`)
  })
}

function displayFolderForm() {
  loadElemToContainer('#content', 'form', 'folder-form-home')

  loadElemToContainer('#folder-form-home', 'label', 'folder-title-home-label')
  addAttributeToElem('#folder-title-home-label', 'for', 'folder-title-home')
  addTextToElem('#folder-title-home-label', 'Title')
  loadElemToContainer('#folder-form-home', 'input', 'folder-title-home')
  addAttributeToElem('#folder-title-home','type','text')
  addAttributeToElem('#folder-title-home','placeholder','New folder')

  loadElemToContainer('#folder-form-home', 'button', 'folder-add-home')
  addTextToElem('#folder-add-home', 'ADD')
}

/**
 * might reuse displayTitle and displayTodoForm for other pages
 *  2 params container and text
 * 
 * if reusing, have all reusable displays here
 * create home display module js file
 * create folder display module js file
 * create todo display module js file
 * i might just create my own framework full of dom functions
 * 
 * ideas:
 * on click(folder 'ADD'), load folder display
 */

export { displayHome }