import Component from './Component';

export default class MovieRating extends Component {
  constructor(rating) {
    super('p', null, 'movie-rating');
    this.element.textContent = `★ ${rating}`;
  }
}
