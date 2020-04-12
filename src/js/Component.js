import ElementCreator from './ElementCreator';

class Component {
  constructor(tag, id, ...classes) {
    this.element = ElementCreator(tag, id, ...classes);
  }
}

export default Component;
