import { format } from 'date-fns';
import todoDependencies from './dependencies';
import Todo from './todo';

function createTodo(
  title,
  description = '',
  dueDate = format(new Date(), 'PP'),
  priority = 0,
  folderToInsert = ''
) {
  const todo = new Todo(title, description, dueDate, priority);
  if (folderToInsert === '') {
    todoDependencies.defaultFolder.folder.push(todo);
  }
  todoDependencies.folders.forEach((currentFolder) => {
    if (currentFolder.name === 'Default' && folderToInsert === 'Default') {
      todoDependencies.defaultFolder.folder.push(todo);
    } else if (currentFolder.name === folderToInsert) {
      todoDependencies.defaultFolder.folder.push(todo);
      currentFolder.folder.push(todo);
    }
  });
}

function deleteTodo(todo, dueDate, priority) {
  todoDependencies.folders.forEach((currentFolder) => {
    currentFolder.folder.forEach((currentTodo) => {
      if (
        currentTodo.title === todo &&
        currentTodo.dueDate === dueDate &&
        currentTodo.priority === priority
      ) {
        const index = currentFolder.folder.indexOf(currentTodo);
        currentFolder.folder.splice(index, 1);
      }
    });
  });
}

function todoObj(todo) {
  let obj;
  todoDependencies.defaultFolder.folder.forEach((currentTodo) => {
    if (currentTodo.title === todo) {
      obj = currentTodo;
    }
  });
  return obj;
}

export { createTodo, deleteTodo, todoObj };
