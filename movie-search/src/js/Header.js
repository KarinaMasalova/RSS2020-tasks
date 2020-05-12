import Component from './Component';
import HeaderTitle from './HeaderTitle';

export default class Header extends Component {
  constructor() {
    super('header', null, 'bg-gray');
    this.headerTitle = new HeaderTitle();
    this.element.append(this.headerTitle.element);
  }
}
