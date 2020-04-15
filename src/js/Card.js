import Component from './Component';
import CardImgTop from './CardImgTop';
import CardText from './CardText';
import RotateBtn from './RotateBtn';

class Card extends Component {
  constructor(obj) {
    super('div', null, 'card');
    this.cardImgTop = new CardImgTop(obj.image);
    this.cardText = new CardText(obj.word, obj.translation);
    this.rotateBtn = new RotateBtn('./img/rotate.svg'); /* like in dist */
    this.append(this.cardImgTop, this.cardText, this.rotateBtn);
  }

  replaceContent(cardObj) {
    this.cardImgTop.element.setAttribute('src', cardObj.image);
  }
}

export default Card;
