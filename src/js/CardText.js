import Component from './Component';

class CardText extends Component {
  constructor(word) {
    super('h5', null, 'card-text');
    this.element.textContent = word;
  }
}

export default CardText;
