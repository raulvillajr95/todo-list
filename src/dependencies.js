import Folder from './folder';

const todoDependencies = (() => {
  const defaultFolder = new Folder('Default');
  const folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  };
})();

export default todoDependencies;
