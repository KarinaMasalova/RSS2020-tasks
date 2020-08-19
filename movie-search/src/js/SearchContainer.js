import Component from './Component';

export default class SearchContainer extends Component {
  constructor() {
    super('form', null, 'form-container');
    this.element.setAttribute('method', 'get');
    this.element.setAttribute('action', '#');
  }
}
