import Component from './Component';
import BurgerCollapse from './BurgerCollapse';
import Nav from './Nav';

class BurgerContainer extends Component {
  constructor() {
      super('div', null, 'pos-f-t');
      const collapse = new BurgerCollapse();
      const nav = new Nav();
      this.append(collapse, nav);
  }
}

export default BurgerContainer;
