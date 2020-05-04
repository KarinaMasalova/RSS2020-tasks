import Component from './Component';

export default class RssText extends Component {
  constructor() {
    super('p', null, 'rss-text');
    this.element.innerText = 'RS School 2020q1';
  }
}