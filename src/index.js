import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import TodoList from './test';

// Testing...
const app = new TodoList();

// Home Page
// homePage();
app.home();

// Folder Page
// folderPage('Default');

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');

export default app;
