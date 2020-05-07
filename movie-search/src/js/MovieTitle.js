import Component from './Component';

export default class MovieTitle extends Component {
  constructor(title) {
    super('p', null, 'movie-title');
    this.element.textContent = title;
  }
}