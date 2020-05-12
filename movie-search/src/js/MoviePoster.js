import Component from './Component';

export default class MoviePoster extends Component {
  constructor(poster) {
    super('div', null, 'movie-poster');
    this.noPoster = '../img/no-poster.jpg';
    this.url = (poster === 'N/A') ? this.noPoster : poster;
    /* this.bgImage = `background-image: url('${this.url}')`;
    this.element.setAttribute('style', this.bgImage); */
    this.preloaderImg = document.createElement('img');
    this.preloaderImg.src = this.url;
    this.preloaderImg.addEventListener('load', () => {
      this.element.style.backgroundImage = `url(${this.url})`;
      this.preloaderImg = null;
    });
  }
}
