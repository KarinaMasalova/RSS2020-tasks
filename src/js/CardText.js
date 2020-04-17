import Component from './Component';

class CardText extends Component {
  /*constructor(word, translation) {
    super('h5', null, 'card-text');
    this.element.textContent = word;
    this.word = word;
    this.translation = translation;
  }*/
  constructor(text) {
    super('h5', null, 'card-text');
    this.element.textContent = text;
    this.text = text;
  }
/*
  toggleTranslation() {
    this.word.toggleClasses('d-none');
    this.translation.toggleClasses('d-none');
  } */
}

export default CardText;
