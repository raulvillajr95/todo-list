class Todo {
  static todoCount = 1;

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todoId = Todo.todoCount;
    Todo.todoCount += 1;
  }
}

export default Todo;
