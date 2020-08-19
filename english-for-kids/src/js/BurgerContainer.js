import Component from './Component';
import BurgerCollapse from './BurgerCollapse';
import Nav from './Nav';

class BurgerContainer extends Component {
  constructor() {
      super('div', null, 'pos-f-t');
      this.collapse = new BurgerCollapse();
      const nav = new Nav(this.collapse);
      this.append(this.collapse, nav);
  }
}

export default BurgerContainer;
