import Component from './Component';

export default class ResetTextBtn extends Component {
  constructor() {
    super('button', null, 'reset-btn');
    this.element.setAttribute('type', 'reset');
    this.element.textContent = '×';
  }
}
