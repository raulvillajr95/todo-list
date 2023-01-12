import Folder from './folder';

// make both consts a function, return normals
// try set/get, run the populate func. and return normals
const todoDependencies = (() => {
  const defaultFolder = new Folder('Default');
  const folders = [defaultFolder];

  return {
    folders,
    defaultFolder,
  };
})();

export default todoDependencies;
