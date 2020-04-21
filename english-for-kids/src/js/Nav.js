import Component from './Component';
import NavbarToggler from './NavbarToggler';

class Nav extends Component {
  constructor(collapse) {
    super('nav', null, 'navbar', 'navbar-dark', 'bg-dark');
    const navbarToggler = new NavbarToggler(collapse);
    this.append(navbarToggler);
  }
}

export default Nav;
