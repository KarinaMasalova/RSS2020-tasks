import Component from './Component';

export default class GithubName extends Component {
  constructor() {
    super('a', null, 'gh-name');
    this.element.textContent = 'KarinaMasalova';
    this.element.setAttribute('href', 'https://github.com/KarinaMasalova');
    this.element.setAttribute('target', '_blank');
  }
}