import Component from './Component';
import NavbarTogglerIcon from './NavbarTogglerIcon';
import BurgerCollapse from './BurgerCollapse';

class NavbarToggler extends Component {
  constructor(collapse) {
    super('button', null, 'navbar', 'navbar-dark', 'bg-dark');
    this.element.setAttribute('type', 'button');
    const navbarTogglerIcon = new NavbarTogglerIcon();
    this.append(navbarTogglerIcon);
    this.element.addEventListener('click', () => collapse.toggleNav());
  }
}

export default NavbarToggler;
