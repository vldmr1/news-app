import { MDCSelect } from '@material/select';

import { getListOfSources, getArticlesData } from '../services/data-service';
import renderSourceSelector from './SourceSelector';
import renderNewsList from './NewsList';
import '../style/index.scss';

export default class NewsApp {
  init = async () => {
    try {
      this.sourceData = await this.getSourcesData().catch(console.log);
      renderSourceSelector(this.sourceData);
    } catch {
      document.querySelector('.articles').innerText = 'Unable to process Source Data';
      return;
    }

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

    try {
      const articlesData = await getArticlesData(articleId).catch(console.log);
      renderNewsList(articlesData);
    } catch {
      articleSection.innerText = 'Unable to process Articles Data';
    }
  }
}