import Folder from './folder';

// make both consts a function, return normals
const todoDependencies = (() => {
  const defaultFolder = new Folder('Default');
  const folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  };
})();

export default todoDependencies;
