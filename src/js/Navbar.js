import Component from './Component';
import Cards from '../cards';
import NavLink from './NavLink';

class Navbar extends Component {
  constructor() {
    super('ul', null, 'navbar-nav');
    const categories = Cards.map( (obj) => {
      const category = new NavLink(obj.category);
      this.append(category);
      return category;
    });
    this.append(...categories);
  }
}

export default Navbar;