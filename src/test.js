import homePage from './home-page';
import folderPage from './folder-page';

/**
 * tries to remove cycle dependency:
 * extract folderBackBtn from folder-page to here
 * create a homePage copy here, call it homePageCopy
 *
 * combine home-page into a class??
 *  have homePage & folderPage as methods??
 *  right here in todo, create a few functions
 *  where homePage() & folder page go, I can use this.start(), this.folder..etc.
 */

function TodoList() {
  const home = () => {
    homePage();
  };

  const folder = (folderName) => {
    folderPage(folderName);
  };

  return {
    home,
    folder,
  };
}

export default TodoList;
