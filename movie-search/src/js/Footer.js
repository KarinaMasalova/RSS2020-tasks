import Component from './Component';
import Github from './Github';
import RssText from './RssText';

export default class Footer extends Component {
  constructor() {
    super('footer', null, 'bg-gray', 'footer-container');
    this.rss = new RssText();
    this.github = new Github();
    this.element.append(this.rss.element, this.github.element);
  }
}
