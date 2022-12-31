function clearDisplay(element) {
  const elem = document.querySelector(element);
  const childrenCount = elem.children.length;
  for (let i = 0; i < childrenCount; i += 1) {
    elem.children[0].remove();
  }
}

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

export { clearDisplay, loadElemToContainer, addAttributeToElem, addTextToElem };
