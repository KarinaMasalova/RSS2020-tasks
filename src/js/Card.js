import Component from './Component';
import RotateBtn from './RotateBtn';
import CardSide from './CardSide';

class Card extends Component {
  constructor(obj) {
    super('div', null, 'card');
    this.cardFrontSide = new CardSide(obj.image, obj.word);
    this.cardFrontSide.element.classList.add('card-side-front');
    this.cardBackSide = new CardSide(obj.image, obj.translation);
    this.cardBackSide.element.classList.add('card-side-back');
    this.audioSrc = obj.audioSrc;
    this.rotateBtn = new RotateBtn('./img/rotate.svg'); /* path like in dist */
    this.element.addEventListener('click', () => this.playAudio());
    this.rotateBtn.addEventListener('click', () => this.element.classList.toggle('is-flipped'));
    this.cardBackSide.addEventListener('mouseleave', () => this.element.classList.toggle('is-flipped'));   
    this.append(this.cardFrontSide, this.cardBackSide, this.rotateBtn);
  }

  replaceContent(cardObj) {
    this.cardFrontSide.cardImgTop.element.setAttribute('src', cardObj.image);
    this.cardFrontSide.cardText.element.textContent = cardObj.word;
    this.cardBackSide.cardImgTop.element.setAttribute('src', cardObj.image);
    this.cardBackSide.cardText.element.textContent = cardObj.translation;
    this.audioSrc = cardObj.audioSrc;
  }

  playAudio() {
    new Audio(this.audioSrc).play();
  }

  getWord() {
    return this.cardFrontSide.cardText.text;
  };
}

export default Card;
