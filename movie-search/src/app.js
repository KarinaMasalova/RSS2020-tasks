import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
import SearchContainer from './js/SearchContainer';
import InputSearchBar from './js/InputSearchBar';
import SearchDiv from './js/SearchDiv';
import Swiper from 'swiper';
import SwiperContainer from './js/SwiperContainer';
import SwiperWrapper from './js/SwiperWrapper';
import SwiperSlide from './js/SwiperSlide';
import SwiperPagination from './js/SwiperPagination';
import Footer from './js/Footer';
import RssText from './js/RssText';
import Github from './js/Github';
import GithubName from './js/GithubName';
import GithubIcon from './js/GithubIcon';
import { loadMovieData } from './js/loader';
import SwiperButtonNext from './js/SwiperButtonNext';
import SwiperButtonPrev from './js/SwiperButtonPrev';
import Movie from './js/Movie';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    this.searchContainer = new SearchContainer();
    this.inputSearchBar = new InputSearchBar();
    this.searchDiv = new SearchDiv();
    this.searchContainer.append(this.inputSearchBar, this.searchDiv);
    this.swiperContainer = new SwiperContainer();
    this.swiperWrapper = new SwiperWrapper();
    this.swiperPagination = new SwiperPagination();
    this.swiperBtnNext = new SwiperButtonNext();
    this.swiperBtnPrev = new SwiperButtonPrev();
    this.swiperSlide = new SwiperSlide();
    this.swiperWrapper.append(this.swiperSlide);
    this.swiperContainer.append(this.swiperWrapper, this.swiperPagination, this.swiperBtnNext, this.swiperBtnPrev);
    this.footer = new Footer();
    this.rssText = new RssText();
    this.github = new Github();
    this.githubIcon = new GithubIcon('./img/github-icon.png');
    this.githubName = new GithubName();
    this.github.append(this.githubIcon, this.githubName);
    this.footer.append(this.rssText, this.github);
    document.body.setAttribute('id', 'honey-comb');
    document.body.append(this.header.element, this.searchContainer.element, this.swiperContainer.element,
      this.footer.element);
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      centerInsufficientSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}

window.addEventListener('load', () => {
  const app = new App();
  let slides;
  loadMovieData('dream', 3)
  .then(data => {
    if (data.Response === 'True') {
      const movies = data.Search.map(obj => new Movie(obj));
      slides = movies.map((movie) => new SwiperSlide(movie));
    }
    app.swiper.appendSlide(slides.map((s) => s.element));
  });
});