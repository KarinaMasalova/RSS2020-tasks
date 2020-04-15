import Component from './Component';

class NavLink extends Component {
  constructor(category) {
    super('a', null, 'nav-link');
    this.element.textContent = category;
    this.category = category;
  }
}

export default NavLink;
