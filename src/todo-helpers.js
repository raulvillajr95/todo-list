import { format } from 'date-fns';
import todoDependencies from './dependencies';
import {
  loadElemToContainer,
  addTextToElem,
  addAttributeToElem,
} from './helpers';
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

function defaultTodoName() {
  // returns string 'Todo' + (number of todo's + 1)
  const numberOfTodos = todoDependencies.defaultFolder.folder.length;
  return `Todo${numberOfTodos + 1}`;
}

// Add todo edit page
function displayTodoEditPage(obj) {
  loadElemToContainer('#content', 'label', 'todo-edit-page-title-label');
  addAttributeToElem('#todo-edit-page-title-label', 'for', 'todo-edit-title');
  addTextToElem('#todo-edit-page-title-label', 'Title:');
  loadElemToContainer(`#content`, 'input', `todo-edit-title`);
  addAttributeToElem(`#todo-edit-title`, 'type', 'text');
  addAttributeToElem(`#todo-edit-title`, 'value', `${obj.title}`);

  loadElemToContainer('#content', 'label', 'todo-edit-page-duedate-label');
  addAttributeToElem(
    '#todo-edit-page-duedate-label',
    'for',
    'todo-edit-duedate'
  );
  addTextToElem('#todo-edit-page-duedate-label', 'Due date:');
  loadElemToContainer(`#content`, 'input', `todo-edit-duedate`);
  addAttributeToElem(`#todo-edit-duedate`, 'type', 'date');
  addAttributeToElem(
    `#todo-edit-duedate`,
    'value',
    `${format(new Date(obj.dueDate), 'y-LL-dd')}`
  );

  // Set a select priority
  loadElemToContainer('#content', 'label', 'todo-edit-page-priority-label');
  addAttributeToElem(
    '#todo-edit-page-priority-label',
    'for',
    'todo-edit-priority'
  );
  addTextToElem('#todo-edit-page-priority-label', 'Priority:');
  loadElemToContainer(`#content`, 'select', `todo-edit-priority`);
  addAttributeToElem(`#todo-edit-priority`, 'name', `todo-edit-priority`);
  const priorityLevels = ['Low', 'Medium', 'High'];
  for (let i = 0; i < 3; i += 1) {
    loadElemToContainer(
      `#todo-edit-priority`,
      'option',
      `todo-edit-priority-${priorityLevels[i].toLowerCase()}`
    );
    addAttributeToElem(
      `#todo-edit-priority-${priorityLevels[i].toLowerCase()}`,
      'value',
      `${i}`
    );
    if (i.toString() === obj.priority) {
      addAttributeToElem(
        `#todo-edit-priority-${priorityLevels[i].toLowerCase()}`,
        'selected',
        `${i}`
      );
    }
    addTextToElem(
      `#todo-edit-priority-${priorityLevels[i].toLowerCase()}`,
      `${priorityLevels[i]}`
    );
  }

  loadElemToContainer('#content', 'label', 'todo-edit-page-description-label');
  addAttributeToElem(
    '#todo-edit-page-description-label',
    'for',
    'todo-edit-description'
  );
  addTextToElem('#todo-edit-page-description-label', 'Description:');
  loadElemToContainer(`#content`, 'input', `todo-edit-description`);
  addAttributeToElem(`#todo-edit-description`, 'type', 'text');
  addAttributeToElem(`#todo-edit-description`, 'value', `${obj.description}`);

  loadElemToContainer('#content', 'button', 'todo-edit-page-save-btn');
  addTextToElem('#todo-edit-page-save-btn', 'SAVE');
}

export {
  createTodo,
  deleteTodo,
  todoObj,
  defaultTodoName,
  displayTodoEditPage,
};
