class ElementCreator {
  static createElement(tag, id, ...classes) {
    const element = document.createElement(tag);
    if (id) element.id = id;
    if (classes) {
      element.classList.add(...classes);
    }
    return element;
  }
}

export default ElementCreator;