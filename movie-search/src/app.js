import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
import SearchContainer from './js/SearchContainer';
import InputSearchBar from './js/InputSearchBar';
import SearchDiv from './js/SearchDiv';
import Footer from './js/Footer';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    this.searchContainer = new SearchContainer();
    this.inputSearchBar = new InputSearchBar();
    this.searchDiv = new SearchDiv();
    this.searchContainer.append(this.inputSearchBar, this.searchDiv);
    this.footer = new Footer();
    document.body.setAttribute('id', 'honey-comb');
    document.body.append(this.header.element, this.searchContainer.element, this.footer.element);
  }
}

window.addEventListener('load', () => {
  const app = new App();
});