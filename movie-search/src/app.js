import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
import SearchContainer from './js/SearchContainer';
import InputSearchBar from './js/InputSearchBar';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    this.searchContainer = new SearchContainer();
    this.inputSearchBar = new InputSearchBar();
    this.searchContainer.append(this.inputSearchBar);
    document.body.append(this.header.element, this.searchContainer.element);
  }
}

window.addEventListener('load', () => {
  const app = new App();
});