import Component from './Component';

export default class SwiperSlide extends Component {
  constructor(movie) {
    super('div', null, 'swiper-slide');
    this.element.append(movie.element);
  }
}