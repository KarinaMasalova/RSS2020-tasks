import Component from './Component';

export default class GithubIcon extends Component {
  constructor(srcPath) {
    super('img', null, 'gh-icon');
    this.element.setAttribute('src', srcPath);
  }
}
