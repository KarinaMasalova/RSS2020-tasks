import Component from './Component';
import OnOffSwitch from './OnOffSwitch';

class ToggleContainer extends Component {
  constructor() {
    super('div', null, 'container');
    this.onOffSwitch = new OnOffSwitch();
    this.append(this.onOffSwitch);
  }
}

export default ToggleContainer;