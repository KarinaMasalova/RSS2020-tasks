import Component from './Component';

class PlayBtnWord extends Component {
  constructor() {
    super('p', null, 'play-btn-word');
    this.element.textContent = 'PLAY';
  }
}

export default PlayBtnWord;