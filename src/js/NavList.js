import Component from './Component';

class NavList extends Component {
  constructor(category) {
    super('li', null, 'nav-item');
    this.element.textContent = category;
    this.category = category;
  }
}

export default NavList;
