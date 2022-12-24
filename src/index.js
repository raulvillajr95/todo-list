import './style.css';

let note = {
  title: 'Milk',
  description: 'I need 2 gallons 2% milk asap for cereal',
  dueDate: '',
}

console.log('toto')

/**
 * start by making todo list work all on console
 * plan out ui/ux
 *  it's my first time pre-planning
 *    so only use whimsical
 * 
 * notes:
 * -todos need to be objects, kinda like the 'books'
 *  preset for library
 * -each 'todo' has a 'title'(string), 'description'(string),
 *  'dueData'(maybe a Date-fns), 'priority'(maybe a number?)
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