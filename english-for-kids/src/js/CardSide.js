import Component from './Component';
import CardImgTop from './CardImgTop';
import CardText from './CardText';

class CardSide extends Component {
  constructor(img, text) {
    super('div', null, 'card-side');
    this.cardImgTop = new CardImgTop(img);
    this.cardText = new CardText(text);
    this.append(this.cardImgTop, this.cardText);
  }
}

export default CardSide;