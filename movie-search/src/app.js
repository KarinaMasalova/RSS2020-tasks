import Swiper from 'swiper';
import Header from './js/Header';
import SearchContainer from './js/SearchContainer';
import InputSearchBar from './js/InputSearchBar';
import SearchDiv from './js/SearchDiv';
import SwiperContainer from './js/SwiperContainer';
import SwiperWrapper from './js/SwiperWrapper';
import SwiperSlide from './js/SwiperSlide';
import SwiperPagination from './js/SwiperPagination';
import SwiperButtonNext from './js/SwiperButtonNext';
import SwiperButtonPrev from './js/SwiperButtonPrev';
import Footer from './js/Footer';
import loadMovieData from './js/loader';
import Movie from './js/Movie';
import saveInputValue from './js/saveInputValue';
import SearchButton from './js/SearchButton';
import ResetTextBtn from './js/ResetTextBtn';
import SearchQueryInfoPanel from './js/SearchQueryInfoPanel';

class App {
  constructor() {
    this.header = new Header();
    this.searchContainer = new SearchContainer();
    this.searchDiv = new SearchDiv();
    this.inputSearchBar = new InputSearchBar();
    this.resetBtn = new ResetTextBtn();
    this.searchButton = new SearchButton();
    this.searchDiv.append(this.inputSearchBar, this.resetBtn, this.searchButton);
    this.searchContainer.append(this.searchDiv);
    this.searchQueryInfoPanel = new SearchQueryInfoPanel();
    this.swiperContainer = new SwiperContainer();
    this.swiperWrapper = new SwiperWrapper();
    this.swiperPagination = new SwiperPagination();
    this.swiperBtnNext = new SwiperButtonNext();
    this.swiperBtnPrev = new SwiperButtonPrev();
    this.swiperContainer.append(this.swiperWrapper, this.swiperPagination,
      this.swiperBtnNext, this.swiperBtnPrev);
    this.footer = new Footer();
    document.body.setAttribute('class', 'honey-comb');
    document.body.append(this.header.element, this.searchContainer.element,
      this.searchQueryInfoPanel.element, this.swiperContainer.element, this.footer.element);

    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centerInsufficientSlides: true,
      preloadImages: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
}

const app = new App();
let page = 1;
let currentQuery = 'dream';
let isNextQuery;
const loader = (query, currentPage) => {
  isNextQuery = false;
  loadMovieData(query, currentPage)
    .then((data) => {
      if (data.Response === 'True') {
        const movies = data.Search.map((obj) => new Movie(obj));
        const slides = movies.map((movie) => new SwiperSlide(movie));
        app.swiper.appendSlide(slides.map((s) => s.element));
      }
    });
};

loader(currentQuery, page);

app.swiper.on('reachEnd', () => {
  if (!isNextQuery) {
    page += 1;
    loader(currentQuery, page);
  }
});

app.searchContainer.addEventListener('submit', (event) => {
  event.preventDefault();
  currentQuery = saveInputValue();
  page = 1;
  isNextQuery = true;
  app.swiper.removeAllSlides();
  loader(currentQuery, page);
});
