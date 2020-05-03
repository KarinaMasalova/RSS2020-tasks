import Component from './Component';

export default class HeaderTitle extends Component {
  constructor() {
    super('h1', null, 'h1-movie-search');
    this.element.innerText = 'MovieSearch';
  }
}