const todoDependencies = (() => {
  const defaultFolder = {
    name: 'Default',
    folder: [],
  };
  const folders = [defaultFolder];

  let currentFolder;

  return {
    folders,
    defaultFolder,
    currentFolder,
  };
})();

export default todoDependencies;
