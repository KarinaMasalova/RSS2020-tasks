import Component from './Component';

export default class SearchButton extends Component {
  constructor() {
    super('button', null, 'search-btn');
    this.element.setAttribute('type', 'submit');
  }
}
