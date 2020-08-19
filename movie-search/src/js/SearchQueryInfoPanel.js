import Component from './Component';
import SearchQueryInfo from './SearchQueryInfo';
import SearchQueryError from './SearchQueryError';

export default class SearchQueryInfoPanel extends Component {
  constructor() {
    super('div', null, 'search-query-info-panel');
    this.queryInfo = new SearchQueryInfo();
    this.queryError = new SearchQueryError();
    this.element.append(this.queryInfo.element, this.queryError.element);
  }
}
