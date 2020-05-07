import Component from './Component';

export default class MoviePoster extends Component {
  constructor(poster) {
    super('img', null, 'movie-poster');
    this.element.setAttribute('src', poster);
  }
}