import Component from './Component';
import NavList from './NavList';
import Cards from '../cards';

class Navbar extends Component {
  constructor() {
    super('ul', null, 'navbar-nav');
    const categories = Cards.map( (obj) => {
      const category = new NavList(obj.category);
      this.append(category);
      return category;
    });
    console.log(categories);
  }
}

export default Navbar;