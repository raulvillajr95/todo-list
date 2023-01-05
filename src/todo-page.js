import { displayTitle, todoDatePriority, displayDescription } from './helpers';

function todoPage() {
  const todoObj = {
    description: 'Small microwave',
    dueDate: '2023-01-10',
    priority: 1,
    title: 'Microwave',
  };
  displayTitle('todo', todoObj.title);
  todoDatePriority(todoObj.description, todoObj.priority);
  displayDescription(todoObj.description);
}

export default todoPage;
