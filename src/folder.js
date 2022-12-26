import { todoDependencies } from "./index.js";

class Folder{
  constructor(name) {
    this.name = name;
    this.folder = [];
  }

  addNote(note){
    this.folder.push(note)
  }

  showTodo(){
    this.folder.forEach((todo) => {
      console.log(todo)
    })
  }

}

function showFolders() {
  console.log(todoDependencies.folders)
}

function createFolder(name) {
  todoDependencies.folders.push(new Folder(name))
}

// ex
let folder1 = new Folder('Folder1')
folder1.addNote({title: 'milk'})
folder1.addNote({title: 'juice'})
// console.log(folder1)
// folder1.showTodo()

export { Folder, createFolder, showFolders }