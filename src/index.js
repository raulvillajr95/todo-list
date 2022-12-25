import './style.css';
import { Todo } from './todo.js';
import { Folder } from './folder.js';

let todoDependencies = (function() {

  let defaultFolder = new Folder('Default');
  let folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  }
})()

function showFolder() {
  todoDependencies.folders.forEach((folder) => {
    console.log(folder)
  });
}
// ex
// showFolder()

// s1, create a folder
let groceries = new Folder('Groceries')
todoDependencies.folders.push(groceries)

// s2, create folder, create todo
let school = new Folder('School')
todoDependencies.folders.push(school)
let pencils = new Todo('Pencils', 'No.2 pencils needed for math', '01-08-2023', 1)
todoDependencies.defaultFolder.folder.push(pencils)
school.folder.push(pencils)

// s3, create todo(adds to default folder)
let gas = new Todo('Gas', 'Grab gas this Tuesday', '12-27-2022')
todoDependencies.defaultFolder.folder.push(gas)

// s4, view all folders created
showFolder()

// s5, create 3 todo's in 1 folder, view all todo's in that 1 folder
let appliences = new Folder('Appliences')
todoDependencies.folders.push(appliences)
let fridge = new Todo('Refrigerator', 'Three door fridge', '12-25-2022', 1)
todoDependencies.defaultFolder.folder.push(fridge)
appliences.folder.push(fridge)
let microwave = new Todo('Microwave', 'Small microwave', '1-10-2022', 1)
todoDependencies.defaultFolder.folder.push(microwave)
appliences.folder.push(microwave)
let shaker = new Todo('Shaker', '1 liter smoothie shaker', '12-30-2022', 1)
todoDependencies.defaultFolder.folder.push(shaker)
appliences.folder.push(shaker)
appliences.showTodo()

// s6, view 1 todo
console.log(todoDependencies.folders[2].folder[0], 's6')

// s7, delete single todo
todoDependencies.folders[2].folder.splice(0, 1);
console.log(todoDependencies.folders[2].folder, 's7');

// s8, delete whole folder and its todo's
todoDependencies.folders.splice(3, 1);

console.log(todoDependencies.folders, 'folders')
console.log(todoDependencies.defaultFolder, 'default folder')


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