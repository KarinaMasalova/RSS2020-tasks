import Component from './Component';
import Checkbox from './Checkbox';
import Label from './Label';

class OnOffSwitch extends Component {
  constructor() {
    super('div', null, 'onoffswitch');
    this.checkbox = new Checkbox();
    this.label = new Label();
    this.append(this.checkbox,  this.label);
  }
}

export default OnOffSwitch;