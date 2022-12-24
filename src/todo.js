class Note{
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// ex
let note2 = new Note('Juice', 'Need apple juice', '', 1)
// console.log(note2)

export { Note }