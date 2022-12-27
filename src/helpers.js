function clearDisplay(element) {
  let elem = document.querySelector(element);
  let childrenCount = elem.children.length;
  for (let i = 0; i < childrenCount; i++) {
    elem.children[0].remove()
  }
}

function loadElemToContainer(container, element, id) {
  let containerElem = document.querySelector(container);
  let newElem = document.createElement(element);
  newElem.setAttribute('id', id);
  containerElem.appendChild(newElem);
}

function addAttributeToElem(element, attName, attValue) {
  let elem = document.querySelector(element);
  elem.setAttribute(attName, attValue);
}

function addTextToElem(element, text) {
  let elem = document.querySelector(element);
  elem.textContent = text;
}

export {
  clearDisplay,
  loadElemToContainer,
  addAttributeToElem,
  addTextToElem,
}