import Component from './Component';
import BurgerCollapse from './BurgerCollapse';

class BurgerContainer extends Component {
  constructor() {
      super('div', null, 'navcontainer', 'pos-f-t');
      const collapse = new BurgerCollapse();
      this.append(collapse);
  }
}

export default BurgerContainer;
