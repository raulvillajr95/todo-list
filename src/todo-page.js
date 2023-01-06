import {
  displayTitle,
  todoDatePriority,
  displayDescription,
  clearDisplay,
} from './helpers';

function todoPage(currentObj) {
  clearDisplay('#content');
  displayTitle('todo', currentObj.title);
  todoDatePriority(currentObj.description, currentObj.priority);
  displayDescription(currentObj.description);
}

export default todoPage;
