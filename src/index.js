import './style.css';
import { Note } from './todo.js';
import { Folder } from './folder.js';

let todoDependencies = (function() {

  let folders = [[{title: 'milk'}, {title: 'juice'}],
    [{title: 'oreos'},{title: 'ritz'}]];

  let defaultFolder = [];

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

let groceries = new Folder('Groceries')
console.log(groceries)

/**
 * Example actions sequence:
 * s1
 * create folder
 * 
 * s2
 * create folder
 * create todo
 * 
 * s3
 * create todo(adds to default folder)
 * 
 * s4
 * view all folders created
 * 
 * s5
 * create 3 todo's in 1 folder
 * view all todo's in that 1 folder
 * 
 * s6
 * view 1 todo
 * 
 * s7
 * delete single todo
 * 
 * s8
 * delete whole folder and its todo's
 */




/**
 * work on example actions
 *  this is to make sure things work on console
 *  use 'mm-dd-yyyy' for now
 * add dates to note
 *  use date-fns
 *  just date for now, no time
 * create function that deletes a specified todo
 * create function that deletes a specified folder
 * create default folder where ALL notes are added
 * create function that displays multiple folders
 * create function that displays a folder's todo's
 * create function that displays a todo
 * each time a folder is created, it's added to 'folders'
 * each time a note is created, it's added to folder
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