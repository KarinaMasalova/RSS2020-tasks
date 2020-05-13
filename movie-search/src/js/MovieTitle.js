import Component from './Component';

export default class MovieTitle extends Component {
  constructor(title, imdbID) {
    super('a', null, 'movie-title');
    this.element.textContent = title;
    this.element.setAttribute('href', `https://imdb.com/title/${imdbID}`);
    this.element.setAttribute('target', '_blank');
  }
}
