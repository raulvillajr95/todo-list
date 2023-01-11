class Folder {
  static folderCount = 0;

  constructor(name) {
    this.name = name;
    this.folder = [];
    this.folderId = Folder.folderCount;
    Folder.folderCount += 1;
  }
}

export default Folder;
