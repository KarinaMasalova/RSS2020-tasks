import Component from './Component';
import MovieTitle from './MovieTitle';
import MoviePoster from './MoviePoster';
import MovieYear from './MovieYear';

export default class Movie extends Component {
  constructor(obj) {
    super('div', null, 'movie-container');
    this.title = new MovieTitle();
    this.poster = new MoviePoster();
    this.year = new MovieYear();
    this.element.append(this.title, this.poster, this.year);
    let { Title, Poster, Year } = obj;
    console.log(Title);
    console.log(Poster);
    console.log(Year);
  }
}