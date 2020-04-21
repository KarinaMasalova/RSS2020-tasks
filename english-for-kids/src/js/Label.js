import Component from './Component';
import Switch from './Switch';
import Inner from './Inner';

class Label extends Component {
  constructor() {
    super('label', null, 'onoffswitch-label');
    this.element.setAttribute('for', 'myonoffswitch');
    this.inner = new Inner();
    this.switch = new Switch();
    this.append(this.inner, this.switch);
  }
}

export default Label;