import { MDCSelect } from '@material/select';
// import { MDCRipple } from '@material/ripple';

import { getListOfSources, getArticlesData } from '../services/data-service';
import SourceSelector from './SourceSelector';
import NewsList from './NewsList';
import '../style/index.scss';

export default class NewsApp {
  init = async () => {
    this.sourceData = await this.getSourcesData().catch(console.log);
    this.sourceSelector = new SourceSelector(this.sourceData);
    this.sourceSelector.render();
    this.addSelectorListener();
  }

  getSourcesData = async () => {
    const sources = await getListOfSources();

    return sources.reduce((result, { name, id }) => {
      result[name] = id;
      return result;
    } , {});
  }

  addSelectorListener = () => {
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    select.listen('MDCSelect:change', this.sourceChangeHandler);
  }

  sourceChangeHandler = async ({ detail: { value } }) => {
    if (this.currentSource === value) {
      return;
    }

    this.currentSource = value;

    const articleSection = document.querySelector('.articles');
    articleSection.innerHTML = '';

    const articleId = this.sourceData[value];
    const articlesData = await getArticlesData(articleId).catch(console.log);
    const sourceList = new NewsList(articlesData);
    sourceList.render();
  }
}