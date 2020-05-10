import Swiper from 'swiper';
import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
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
import RssText from './js/RssText';
import Github from './js/Github';
import GithubName from './js/GithubName';
import GithubIcon from './js/GithubIcon';
import loadMovieData from './js/loader';
import Movie from './js/Movie';
import saveInputValue from './js/saveInputValue';
import SearchButton from './js/SearchButton';
import ResetTextBtn from './js/ResetTextBtn';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    this.searchContainer = new SearchContainer();
    this.searchDiv = new SearchDiv();
    this.inputSearchBar = new InputSearchBar();
    this.resetBtn = new ResetTextBtn();
    this.searchButton = new SearchButton();
    this.searchDiv.append(this.inputSearchBar, this.resetBtn, this.searchButton);
    this.searchContainer.append(this.searchDiv);
    this.swiperContainer = new SwiperContainer();
    this.swiperWrapper = new SwiperWrapper();
    this.swiperPagination = new SwiperPagination();
    this.swiperBtnNext = new SwiperButtonNext();
    this.swiperBtnPrev = new SwiperButtonPrev();
    this.swiperContainer.append(this.swiperWrapper, this.swiperPagination,
      this.swiperBtnNext, this.swiperBtnPrev);
    this.footer = new Footer();
    this.rssText = new RssText();
    this.github = new Github();
    this.githubIcon = new GithubIcon('./img/github-icon.svg');
    this.githubName = new GithubName();
    this.github.append(this.githubIcon, this.githubName);
    this.footer.append(this.rssText, this.github);
    document.body.setAttribute('id', 'honey-comb');
    document.body.append(this.header.element, this.searchContainer.element,
      this.swiperContainer.element, this.footer.element);
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centerInsufficientSlides: true,
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
  console.log(page);
  isNextQuery = true;
  app.swiper.removeAllSlides();
  loader(currentQuery, page);
});
