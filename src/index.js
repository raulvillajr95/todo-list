import './style.css';
import './reset.css';
import { Folder } from './folder.js';
import { displayHomePage } from './display.js';

const todoDependencies = (() => {

  const defaultFolder = new Folder('Default');
  const folders = [defaultFolder];

  let currentFolder;

  return {
    folders,
    defaultFolder,
    currentFolder,
  }
})()

displayHomePage()
// createTodo(
//   'Pencils',
//   'No.2 pencils needed for math',
//   '01-08-2023',
//   1,
//   ''
// )
// displayTodoPage('Pencils')

// s1, create a folder ✅
// createFolder('Groceries')
// s2, create folder, create todo ✅
// createFolder('School')
// createTodo(
//   'Pencils',
//   'No.2 pencils needed for math',
//   '01-08-2023',
//   1,
//   'School'
// )
// s3, create todo(adds to default folder) ✅
// createTodo(
//   'Gas',
//   'Grab gas this Tuesday',
//   '12-27-2022',
//   2,
// )
// s4, view all folders created ✅
// showFolders()
// s5, create 3 todo's in 1 folder, view all todo's in that 1 folder ✅
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
// s6, view 1 todo ✅
// showTodo('Microwave')
// s7, delete single todo ✅
// deleteTodo(
//   'Shaker',
//   '12-30-2022',
//   1
// )
// s8, delete whole folder and its todo's ✅
// deleteFolder('School')

export { todoDependencies }

/**
 * add eslint and maybe prettier
 * need a way to know if todo is added from home when clicking on default
 *  maybe mess with home add btn
 *  or default folder div
 *    when clicked, if default is the only folder && there's 1 todo,
 *      add a 'list-folder' div??
 * refactor code
 *  display functions can be reusable
 *  like 
 * create function that displays note page
 *  1 param, todo object
 *    from their grab title, dueDate, priority, & description
 * have a the same s8 sequence, but with ui
 * add dates to note
 *  use date-fns
 *  just date for now, no time
 * add preselected dueDate as today
 * add way to edit
 *  folder names
 *  todo names, dueDate, priority, description
 * 
 * Bugs:
 * in todo forms,
 *  if title empty, don't add todo
 * adding note inside default page, don't add double todos to default folder
 * when adding folders in home page, you add name with spaces like 'ca sio'
 * i'm not able to read todos with the same name,
 *  todoObj reads them all from default folder
 *  then need to be read from the specific folder
 *  even then, within a folder you can't have diffirent names
 *  possibly check with name, dueDate, priority, and desc
 *    instead of just name
 * might need to be able to have same named folders, also todo's
 * when clicking on divs, it's the whole div
 *  it shouldn't include the DEL button
 * when default todo is added from home page,
 *  then you click on default folder, todos don't have clicks
 * when in folder and I add todo's
 *  extra 'list-folder' divs are added
 * when multiple todos deleted in folder,
 *  last one won't delete
 * 
 * notes:
 * -todos need to be objects, kinda like the 'books'
 *  preset for library
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
 * use 'enter' key to add and stuff
 * use date-fns library
 * use localStorage
 * refactor code & fix bugs
 * improve it UI/UX wise, heavy on css
 * remove dev mode
 * do 10 exercises in each, Exercism, CodeWars, & HackerRank
 */