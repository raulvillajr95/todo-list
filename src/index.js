import './style.css';
import './reset.css';
import todoDependencies from './dependencies';
import homePage from './home-page';
// import folderPage from './folder-page';

// Home Page
homePage();

// Folder page,(manual name for now)
// folderPage('Default');

// Just test logging results
console.log(todoDependencies.defaultFolder, 'default folders');
console.log(todoDependencies.folders, 'folders');
