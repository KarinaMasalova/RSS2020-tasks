import ElementCreator from './ElementCreator';

class Component {
  constructor(tag, id, ...classes) {
    this.element = ElementCreator.createElement(tag, id, ...classes);
  }

  append(...components) {
    this.element.append(...components.map((c) => c.element));
  }

  addEventListener(type, handler) {
    this.element.addEventListener(type, handler);
  }
 /*
  toggleClasses(...classes) {
    classes.forEach((class) => this.element.classList.toggle(class));
  } */
}

export default Component;
