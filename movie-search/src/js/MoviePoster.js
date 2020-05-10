import Component from './Component';

export default class MoviePoster extends Component {
  constructor(poster) {
    super('img', null, 'movie-poster');
    this.element.setAttribute('src', poster);
    this.element.setAttribute('width', '200');
    this.element.setAttribute('height', '300');
  }
}
