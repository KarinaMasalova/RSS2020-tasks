import Header from './js/Header';
import HeaderTitle from './js/HeaderTitle';

class App {
  constructor() {
    this.header = new Header();
    this.headerTitle = new HeaderTitle();
    this.header.append(this.headerTitle);
    document.body.append(this.header.element);
  }
}

window.addEventListener('load', () => {
  const app = new App();
});