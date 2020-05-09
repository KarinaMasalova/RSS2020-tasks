import Component from './Component';

export default class InputSearchBar extends Component {
  constructor() {
    super('input', null, 'search-bar');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeholder', 'Search...');
  }
}
