import Component from './Component';

class RotateBtn extends Component {
  constructor(rotateSrc) {
    super('img', null, 'rotate');
    this.element.setAttribute('src', rotateSrc);
  }
}

export default RotateBtn;
