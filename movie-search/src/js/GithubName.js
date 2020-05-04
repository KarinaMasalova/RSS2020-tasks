import Component from './Component';

export default class GithubName extends Component {
  constructor() {
    super('p', null, 'gh-name');
    this.element.innerText = 'KarinaMasalova';
  }
}