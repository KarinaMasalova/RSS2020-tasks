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
    // this.cardFrontSide.addEventListener('mouseleave', () => this.element.classList.toggle('is-flipped'));   
    this.append(this.cardFrontSide, this.cardBackSide, this.rotateBtn);
  }

  replaceContent(cardObj) {
    this.cardImgTop.element.setAttribute('src', cardObj.image);
    this.cardText.element.textContent = cardObj.word;
  }

  playAudio() {
    new Audio(this.audioSrc).play();
  }
}

export default Card;
