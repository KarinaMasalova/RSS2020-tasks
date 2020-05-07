import Component from './Component';
import MovieTitle from './MovieTitle';
import MoviePoster from './MoviePoster';
import MovieYear from './MovieYear';

export default class Movie extends Component {
  constructor(obj) {
    super('div', null, 'movie-container');
    const { Title, Poster, Year } = obj;
    this.title = new MovieTitle(Title);
    this.poster = new MoviePoster(Poster);
    this.year = new MovieYear(Year);
    this.element.append(this.title.element, this.poster.element, this.year.element);
  }
}