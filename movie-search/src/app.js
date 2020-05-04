import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';
import SearchContainer from './js/SearchContainer';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    this.searchContainer = new SearchContainer();
    document.body.append(this.header.element, this.searchContainer.element);
  }
}

window.addEventListener('load', () => {
  const app = new App();
});