import Component from './Component';

class CardText extends Component {
  constructor(word, translation) {
    super('h5', null, 'card-text');
    this.element.textContent = word;
    this.word = word;
    this.translation = translation;
  }
}

export default CardText;
