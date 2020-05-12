import Component from './Component';
import GithubIcon from './GithubIcon';
import GithubName from './GithubName';

export default class Github extends Component {
  constructor() {
    super('div', null, 'github');
    this.ghIcon = new GithubIcon('./img/github-icon.svg');
    this.ghName = new GithubName();
    this.element.append(this.ghIcon.element, this.ghName.element);
  }
}
