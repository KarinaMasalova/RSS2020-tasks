//import Cards from './cards';
import Component from './js/Component';
//import Row from './js/Row';
//import Column from './js/Column';

window.addEventListener('load', () => {
  const container = new Component('div', null, 'container');
  document.body.append(container.element);
});
