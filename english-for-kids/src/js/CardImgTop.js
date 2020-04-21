import Component from './Component';

class CardImgTop extends Component {
  constructor(srcPath) {
    super('img', null, 'card-img-top');
    this.element.setAttribute('src', srcPath);
  }
}

export default CardImgTop;
