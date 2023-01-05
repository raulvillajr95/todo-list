import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './todo-list';

const app = new TodoList();

// Home Page
app.homePage();

// Folder Page
// app.folderPage('Default');

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
