import './style.css';
import './reset.css';
import {
  createTodo,
  showTodos,
  showTodo,
  deleteTodo
} from './todo.js';
import {
  Folder,
  createFolder,
  showFolders,
  deleteFolder
} from './folder.js';
import { displayHome } from './display.js'

let todoDependencies = (function() {

  let defaultFolder = new Folder('Default');
  let folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  }
})()

// s1, create a folder
// createFolder('Groceries')

// // // s2, create folder, create todo
// createFolder('School')
// createTodo(
//   'Pencils',
//   'No.2 pencils needed for math',
//   '01-08-2023',
//   1,
//   'School'
// )
// // // s3, create todo(adds to default folder)
// createTodo(
//   'Gas',
//   'Grab gas this Tuesday',
//   '12-27-2022',
//   2,
// )
// // // s4, view all folders created
// showFolders()
// // // s5, create 3 todo's in 1 folder, view all todo's in that 1 folder
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
// // // s6, view 1 todo
// showTodo('Microwave')
// // // s7, delete single todo
// deleteTodo(
//   'Shaker',
//   '12-30-2022',
//   1
// )
// // // s8, delete whole folder and its todo's
// deleteFolder('School')

// display test
displayHome()

console.log(todoDependencies.folders, 'folders')
console.log(todoDependencies.defaultFolder, 'default folder')

export { todoDependencies }

/**
 * create function that displays home page,
 *  array of folders as param
 * create function that displays folder page,
 *  1 param, folder object
 *    from their grab todo's & titles
 * create function that displays note page
 *  1 param, todo object
 *    from their grab title, dueDate, priority, & description
 * have a the same s8 sequence, but with ui
 * add dates to note
 *  use date-fns
 *  just date for now, no time
 * add way to edit
 *  folder names
 *  todo names, dueDate, priority, description
 * 
 * notes:
 * -todos need to be objects, kinda like the 'books'
 *  preset for library
 * -each 'todo' has a 'title'(string), 'description'(string),
 *  'dueDate'(maybe a Date-fns), 'priority'(maybe a number?)
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
 * add eslint and prettier
 * improve it UI/UX wise
 * remove dev mode
 * do 10 exercises in each, Exercism, CodeWars, & HackerRank
 */