import Component from './Component';
import Navbar from './Navbar';

class BurgerCollapse extends Component {
  constructor() {
    super('div', 'navbarToggleExternalContent', 'collapse', 'bg-dark');
    const navbar = new Navbar();
    this.append(navbar);
  }

  toggleNav() {
    this.element.classList.toggle('show');
  }

  deleteShowClass() {
    this.element.classList.remove('show');
  }
}

export default BurgerCollapse;
