import { todoDependencies } from "./index.js";

class Todo{
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function createTodo(
  title,
  description,
  dueDate,
  priority,
  folderToInsert = ''
) {
  let todo = new Todo(title, description, dueDate, priority)
  if (folderToInsert === '') {
    todoDependencies.defaultFolder.folder.push(todo)
  }
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === 'Default' && folderToInsert === 'Default') {
      todoDependencies.defaultFolder.folder.push(todo)
    } else if (currentFolder.name === folderToInsert) {
      todoDependencies.defaultFolder.folder.push(todo)
      currentFolder.folder.push(todo)
    }
  })
}

function showTodo(todo = '') {
  let todoList = [];
  if (todo === '') {
    console.log(todoDependencies.defaultFolder.folder)
  } else {
    todoDependencies.defaultFolder.folder.forEach((currentTodo) => {
      if (currentTodo.title === todo) {
        todoList.push(currentTodo)
      }
    })
    console.log(todoList)
  }
}

function showTodos(folderToOpen = '') {
  if (folderToOpen === '') {
    console.log(todoDependencies.defaultFolder.folder)
  }
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === folderToOpen) {
      console.log(currentFolder.folder)
    }
  })
}

function deleteTodo(todo, dueDate, priority) {
  todoDependencies.folders.forEach((currentFolder) => {
    currentFolder.folder.forEach((currentTodo) => {
      if (
        currentTodo.title === todo
        && currentTodo.dueDate === dueDate
        && currentTodo.priority === priority
        ) {
        let index = currentFolder.folder.indexOf(currentTodo)
        currentFolder.folder.splice(index, 1)
      }
    })
  })
}

function todoObj(todo) {
  let obj;
  todoDependencies.defaultFolder.folder.forEach((currentTodo) => {
    if (currentTodo.title === todo) {
      obj = currentTodo;
    }
  })
  return obj;
}

export { createTodo, showTodos, showTodo, deleteTodo, todoObj }