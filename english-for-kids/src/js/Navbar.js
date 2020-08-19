import Component from './Component';
import Cards from '../cards';
import NavLink from './NavLink';

class Navbar extends Component {
  constructor() {
    super('ul', null, 'navbar-nav');
    this.mainPage = new NavLink('Main page');
    this.categories = Cards.map( (obj) => {
      const category = new NavLink(obj.category);
      this.append(category);
      return category;
    });
    this.append(this.mainPage, ...this.categories);
  }
}

export default Navbar;