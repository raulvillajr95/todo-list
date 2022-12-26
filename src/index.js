import './style.css';
import './reset.css';
import { createTodo, showTodos, showTodo, deleteTodo } from './todo.js';
import { Folder, createFolder, showFolders, deleteFolder } from './folder.js';

let todoDependencies = (function() {

  let defaultFolder = new Folder('Default');
  let folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  }
})()

// s1, create a folder
createFolder('Groceries')

// s2, create folder, create todo
createFolder('School')
createTodo(
  'Pencils',
  'No.2 pencils needed for math',
  '01-08-2023',
  1,
  'School'
)

// s3, create todo(adds to default folder)
createTodo(
  'Gas',
  'Grab gas this Tuesday',
  '12-27-2022',
  2,
)

// s4, view all folders created
showFolders()

// s5, create 3 todo's in 1 folder, view all todo's in that 1 folder
createFolder('Appliances')
createTodo(
  'Refrigerator',
  'Three door fridge',
  '12-25-2022',
  1,
  'Appliances'
)
createTodo(
  'Microwave',
  'Small microwave',
  '1-10-2022',
  1,
  'Appliances'
)
createTodo(
  'Shaker',
  '1 liter smoothie shaker',
  '12-30-2022',
  1,
  'Appliances'
)
showTodos('Appliances')

// s6, view 1 todo
showTodo('Microwave')

// // s7, delete single todo
deleteTodo(
  'Shaker',
  '12-30-2022',
  1
)

// // s8, delete whole folder and its todo's
deleteFolder('School')

console.log(todoDependencies.folders, 'folders')
console.log(todoDependencies.defaultFolder, 'default folder')

export { todoDependencies }

/**
 * refactor action code
 *  they need to be simple calls
 * create function that displays multiple folders
 * create function that displays a folder's todo's
 * create function that displays a todo
 * each time a folder is created, it's added to 'folders'
 * each time a note is created, it's added to folder
 * add dates to note
 *  use date-fns
 *  just date for now, no time
 * plan out ui/ux
 *  it's my first time pre-planning
 *    so only use whimsical
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