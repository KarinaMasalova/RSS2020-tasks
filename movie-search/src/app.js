import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
import SearchContainer from './js/SearchContainer';
import InputSearchBar from './js/InputSearchBar';
import SearchDiv from './js/SearchDiv';
import Footer from './js/Footer';
import RssText from './js/RssText';
import Github from './js/Github';
import GithubName from './js/GithubName';
import GithubIcon from './js/GithubIcon';
import SwiperContainer from './js/SwiperContainer';
import SwiperWrapper from './js/SwiperWrapper';
import SwiperSlide from './js/SwiperSlide';

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
    this.swiperSlide = new SwiperSlide();
    this.swiperWrapper.append(this.swiperSlide);
    this.swiperContainer.append(this.swiperWrapper);
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
  }
}

window.addEventListener('load', () => {
  const app = new App();
});