/**
 * No outside sources
 * Loadup all functions that have no outside dependencies
 * Then setaside a file where all functions have the same dependencies
 * - most likely a file that depends purely on todoDependencies
 * - do it by file dependencies, idk exactly how yet
 */

// Element helpers
function loadElemToContainer(container, element, id) {
  const containerElem = document.querySelector(container);
  const newElem = document.createElement(element);
  newElem.setAttribute('id', id);
  containerElem.appendChild(newElem);
}
function addAttributeToElem(element, attName, attValue) {
  const elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}
function addTextToElem(element, text) {
  const elem = document.querySelector(element);
  elem.textContent = text;
}

// Display helpers
function clearDisplay(element) {
  const elem = document.querySelector(element);
  const childrenCount = elem.children.length;
  for (let i = 0; i < childrenCount; i += 1) {
    elem.children[0].remove();
  }
}
function displayTitle(page, title) {
  loadElemToContainer('#content', 'div', `${page}-title-div`);
  if (title !== 'Todo List') {
    loadElemToContainer(`#${page}-title-div`, 'button', `${page}-back-btn`);
    addTextToElem(`#${page}-back-btn`, 'BACK');
  }
  loadElemToContainer(`#${page}-title-div`, 'h1', `${page}-title`);
  addTextToElem(`#${page}-title`, `${title}`);
}
// Might modify it
function displayTodoForm(page) {
  loadElemToContainer('#content', 'div', `todo-form-${page}`);

  loadElemToContainer(
    `#todo-form-${page}`,
    'label',
    `todo-title-${page}-label`
  );
  addAttributeToElem(`#todo-title-${page}-label`, 'for', `todo-title-${page}`);
  addTextToElem(`#todo-title-${page}-label`, 'Title');
  loadElemToContainer(`#todo-form-${page}`, 'input', `todo-title-${page}`);
  addAttributeToElem(`#todo-title-${page}`, 'type', 'text');
  addAttributeToElem(`#todo-title-${page}`, 'placeholder', 'New Todo');

  loadElemToContainer(
    `#todo-form-${page}`,
    'label',
    `todo-duedate-${page}-label`
  );
  addAttributeToElem(
    `#todo-duedate-${page}-label`,
    'for',
    `todo-duedate-${page}`
  );
  addTextToElem(`#todo-duedate-${page}-label`, 'Due date');
  loadElemToContainer(`#todo-form-${page}`, 'input', `todo-duedate-${page}`);
  addAttributeToElem(`#todo-duedate-${page}`, 'type', 'date');
  addAttributeToElem(`#todo-duedate-${page}`, 'placeholder', 'Due Date');

  // Priority select
  loadElemToContainer(
    `#todo-form-${page}`,
    'label',
    `todo-priority-${page}-label`
  );
  addAttributeToElem(
    `#todo-priority-${page}-label`,
    'for',
    `todo-priority-${page}`
  );
  addTextToElem(`#todo-priority-${page}-label`, 'Priority');
  loadElemToContainer(`#todo-form-${page}`, 'select', `todo-priority-${page}`);
  addAttributeToElem(`#todo-priority-${page}`, 'name', `todo-priority-${page}`);
  loadElemToContainer(
    `#todo-priority-${page}`,
    'option',
    `todo-priority-${page}-low`
  );
  addAttributeToElem(`#todo-priority-${page}-low`, 'value', '0');
  addAttributeToElem(`#todo-priority-${page}-low`, 'selected', '');
  addTextToElem(`#todo-priority-${page}-low`, 'Low');
  loadElemToContainer(
    `#todo-priority-${page}`,
    'option',
    `todo-priority-${page}-medium`
  );
  addAttributeToElem(`#todo-priority-${page}-medium`, 'value', '1');
  addTextToElem(`#todo-priority-${page}-medium`, 'Medium');
  loadElemToContainer(
    `#todo-priority-${page}`,
    'option',
    `todo-priority-${page}-high`
  );
  addAttributeToElem(`#todo-priority-${page}-high`, 'value', '2');
  addTextToElem(`#todo-priority-${page}-high`, 'High');

  loadElemToContainer(
    `#todo-form-${page}`,
    'label',
    `todo-description-${page}-label`
  );
  addAttributeToElem(
    `#todo-description-${page}-label`,
    'for',
    `todo-description-${page}`
  );
  addTextToElem(`#todo-description-${page}-label`, 'Description');
  loadElemToContainer(
    `#todo-form-${page}`,
    'input',
    `todo-description-${page}`
  );
  addAttributeToElem(`#todo-description-${page}`, 'placeholder', 'Description');

  // adding 'add' btn automatically only to folder pages
  if (page !== 'home') {
    loadElemToContainer(`#todo-form-${page}`, 'button', `todo-add-${page}-btn`);
    addTextToElem(`#todo-add-${page}-btn`, 'ADD');
  }
}
function displayFolderForm() {
  loadElemToContainer('#content', 'div', 'folder-div-home');

  loadElemToContainer('#folder-div-home', 'label', 'folder-title-home-label');
  addAttributeToElem('#folder-title-home-label', 'for', 'folder-title-home');
  addTextToElem('#folder-title-home-label', 'Title');
  loadElemToContainer('#folder-div-home', 'input', 'folder-title-home');
  addAttributeToElem('#folder-title-home', 'type', 'text');
  addAttributeToElem('#folder-title-home', 'placeholder', 'New folder');

  loadElemToContainer('#folder-div-home', 'button', 'folder-add-home-btn');
  addTextToElem('#folder-add-home-btn', 'ADD');
}
function todoDatePriority(dueDate, priorityVal) {
  loadElemToContainer('#content', 'div', 'todo-info-div');

  loadElemToContainer(`#todo-info-div`, 'h2', `todo-duedate`);
  addTextToElem(`#todo-duedate`, `Due date: ${dueDate}`);

  let priority = '';
  if (priorityVal === '0') {
    priority = 'low';
  } else if (priorityVal === '1') {
    priority = 'medium';
  } else if (priorityVal === '2') {
    priority = 'high';
  }

  loadElemToContainer(`#todo-info-div`, 'h2', `todo-priority`);
  addTextToElem(`#todo-priority`, `Priority: ${priority}`);
}
function displayDescription(description) {
  loadElemToContainer(`#content`, 'p', `todo-description`);
  addTextToElem(`#todo-description`, `Description: ${description}`);
}

// Add 'ADD' btn in home page
function formAddBtn(page) {
  loadElemToContainer(`#todo-form-${page}`, 'button', `todo-add-${page}-btn`);
  addTextToElem(`#todo-add-${page}-btn`, 'ADD');
}

// Return color based on priority
// mostlikely use this in another function so it can be updated
function priorityColor(priorityNum) {
  let color = '';
  console.log(color);

  if (Number(priorityNum) === 2) {
    console.log('its 2');
    color = '#A41623';
  } else if (Number(priorityNum) === 1) {
    console.log('its 1');
    color = '#FFB563';
  }

  return color;
}

export {
  clearDisplay,
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
  displayTitle,
  displayTodoForm,
  displayFolderForm,
  todoDatePriority,
  displayDescription,
  formAddBtn,
  priorityColor,
};
