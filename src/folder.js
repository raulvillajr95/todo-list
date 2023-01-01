class Folder {
  constructor(name) {
    this.name = name;
    this.folder = [];
  }

  addNote(note) {
    this.folder.push(note);
  }
}

export default Folder;
