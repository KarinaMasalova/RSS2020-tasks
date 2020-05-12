import Component from './Component';

export default class RssText extends Component {
  constructor() {
    super('span', null, 'rss-text');
    this.element.innerText = 'RS School 2020q1';
  }
}
