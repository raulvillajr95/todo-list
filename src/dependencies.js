class Folder {
  constructor(name) {
    this.name = name;
    this.folder = [];
  }
}

const todoDependencies = (() => {
  const defaultFolder = new Folder('Default');
  const folders = [defaultFolder];

  let currentFolder;

  return {
    folders,
    defaultFolder,
    currentFolder,
  };
})();

export default todoDependencies;
