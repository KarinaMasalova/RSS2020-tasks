import Component from './Component';

export default class InputSearchBar extends Component {
  constructor() {
    super('input', 'search-bar', 'search-bar');
    this.element.setAttribute('type', 'text');
    this.element.setAttribute('placeholder', 'Search...');
    this.element.setAttribute('autocomplete', 'off');
    this.element.setAttribute('autofocus', '');
  }
}
