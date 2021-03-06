class Game {
  constructor() {
    this.winAudio = new Audio('./audio/success.mp3');
    this.failAudio = new Audio('./audio/failure.mp3');
    this.errorAudio = new Audio('./audio/error.mp3');
    this.correctAudio = new Audio('./audio/correct.mp3');
  }

  
  startGame(cards) {
    this.mistake = 0;
    this.curCards = [...cards]; /* cards copy */
    this.nextRandCard();
    this.randCard.playAudio();
  }

  nextRandCard() {
    this.randIndex = Math.floor(Math.random() * this.curCards.length);
    this.randCard = this.curCards[this.randIndex];
  }

  rightCard() {
    this.correctAudio.play();
    this.curCards.splice(this.randIndex, 1);
    if (this.curCards === 0) {
      console.log(this.mistake);
    } else {
      this.nextRandCard();
      this.playCurCard();
    }
  }

  wrongCard() {
    this.mistake += 1;
    this.errorAudio.play();
  }

  selectCard(card) {
    console.log(card, this.randCard);
    if (card.word == this.randCard.word) rightCard();
    else wrongCard();
  }

  playCurCard() {
    this.randCard.playAudio();
  }
}

export default Game;
