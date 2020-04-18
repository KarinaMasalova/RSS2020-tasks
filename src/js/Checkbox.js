import Component from './Component';

class Checkbox extends Component {
  constructor() {
    super('input', 'myonoffswitch', 'onoffswitch-checkbox');
    this.element.setAttribute('type', 'checkbox');
    this.element.setAttribute('checked', '');
  }
}

export default Checkbox;