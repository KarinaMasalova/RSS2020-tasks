import Component from './Component';

class CardText extends Component {
  constructor(text) {
    super('h5', null, 'card-text');
    this.element.textContent = text;
    this.text = text;
  }
}

export default CardText;
