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
    if (currentFolder.name === folderToInsert) {
      todoDependencies.defaultFolder.folder.push(todo)
      currentFolder.folder.push(todo)
    }
  })
}

// ex
let note2 = new Todo('Juice', 'Need apple juice', '', 1)
// console.log(note2)

export { Todo, createTodo }