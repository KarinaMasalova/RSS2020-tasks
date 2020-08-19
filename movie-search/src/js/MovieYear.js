import Component from './Component';

export default class MovieYear extends Component {
  constructor(year) {
    super('p', null, 'movie-year');
    this.element.textContent = year;
  }
}