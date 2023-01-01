import todoDependencies from './dependencies';
import {
  displayTitle,
  displayTodoForm,
  todoDatePriority,
  displayDescription,
} from './helpers';
import { pageFormAddTodo, folderBackBtn } from './folder-actions';
import todoBackBtn from './todo-actions';
import { nameOfListToDisplay } from './display-helpers';
import { todoObj } from './todo-helpers';

function displayFolderPage(folder) {
  todoDependencies.currentFolder = folder;
  displayTitle('folder', folder);
  displayTodoForm('folder');
  nameOfListToDisplay(folder, 'folder');
  pageFormAddTodo('folder');
  folderBackBtn();
}

function displayTodoPage(todoToDisplay) {
  const todo = todoObj(todoToDisplay);

  displayTitle('todo', todo.title);
  todoDatePriority(todo.dueDate, todo.priority);
  displayDescription(todo.description);
  todoBackBtn();
}

export { displayFolderPage, displayTodoPage };
