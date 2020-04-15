import Component from './Component';

class RotateBtn extends Component {
  constructor(rotateSrc) {
    super('img', null, 'reverse');
    this.element.setAttribute('src', rotateSrc);
  }
}

export default RotateBtn;
