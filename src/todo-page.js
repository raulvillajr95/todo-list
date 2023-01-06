import {
  displayTitle,
  todoDatePriority,
  displayDescription,
  clearDisplay,
} from './helpers';

// Todo Page
function todoPage(currentObj) {
  clearDisplay('#content');
  displayTitle('todo', currentObj.title);
  todoDatePriority(currentObj.description, currentObj.priority);
  displayDescription(currentObj.description);
}

export default todoPage;
