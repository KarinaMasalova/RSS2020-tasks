import Component from './Component';
import PlayBtnWord from './PlayBtnWord';

class PlayBtn extends Component {
  constructor() {
    super('button', null, 'play-btn', 'container'/*, 'd-none'*/);
    const playBtnWord = new PlayBtnWord();
    this.append(playBtnWord);
  }
}

export default PlayBtn;