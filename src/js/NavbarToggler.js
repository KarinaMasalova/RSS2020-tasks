import Component from './Component';
import NavbarTogglerIcon from './NavbarTogglerIcon';

class NavbarToggler extends Component {
  constructor() {
    super('button', null, 'navbar', 'navbar-dark', 'bg-dark');
    this.element.setAttribute('type', 'button');
    this.element.setAttribute('data-toggle', 'collapse');
    this.element.setAttribute('data-target', '#navbarToggleExternalContent');
    this.element.setAttribute('aria-controls', 'navbarToggleExternalContent')
    const navbarTogglerIcon = new NavbarTogglerIcon();
    this.append(navbarTogglerIcon);
  }
}

export default NavbarToggler;
