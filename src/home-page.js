import todoDependencies from './dependencies';
import { displayFolderForm, displayTitle, displayTodoForm } from './helpers';
import { displayList } from './display-helpers';

function homePage() {
  displayTitle('home', 'Todo List');
  displayTodoForm('home');
  displayList(todoDependencies.folders, 'home');
  displayFolderForm();
}

export default homePage;
