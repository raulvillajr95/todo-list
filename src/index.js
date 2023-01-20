import './style.css';
import './reset.css';
import TodoList from './todo-list';
import { populateDependencies } from './local-storage';

const app = new TodoList();

// Home Page
populateDependencies();
app.homePage();
