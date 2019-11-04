import { MDCSelect } from '@material/select';

import { ERROR_SOURCES, ERROR_ARTICLES, BASE_URL, API_KEY, GET } from '../constants/constants';
import { fetchApiData } from '../services/data-service';
import renderSourceSelector from './SourceSelector';
import renderNewsList from './NewsList';
import urlBuilder from '../utils/url-builder';
import '../style/index.scss';

export default class NewsApp {
  init = async () => {
    try {
      this.sourceData = await this.getSourcesData().catch(console.log);
      renderSourceSelector(this.sourceData);
    } catch(err) {
      console.log(err);
      this.errorHandler(ERROR_SOURCES);
    }

    this.addSelectorListener();
  }

  getSourcesData = async () => {
    const url = urlBuilder(BASE_URL, ['/sources'], {apiKey: API_KEY});
    const data = await fetchApiData(url, GET);

    return data.sources.reduce((result, { name, id }) => {
      result[name] = id;
      return result;
    } , {});
  }

  addSelectorListener = () => {
    const select = new MDCSelect(document.querySelector('.mdc-select'));
    select.listen('MDCSelect:change', this.sourceChangeHandler);
  }

  sourceChangeHandler = async ({ detail: { value } }) => {
    if (this.currentSourceName === value) {
      return;
    }

    this.currentSourceName = value;
    const articleId = this.sourceData[value];

    const articleSection = document.querySelector('.articles');
    articleSection.innerHTML = '';

    const url = urlBuilder(BASE_URL, ['/articles'], {apiKey: API_KEY, source: articleId});

    try {
      const data = await fetchApiData(url, GET).catch(console.log);
      renderNewsList(data.articles);
    } catch(err) {
      console.log(err);
      this.errorHandler(ERROR_ARTICLES);
    }
  }

  errorHandler = (errorMessage) => {
    import(/* webpackChunkName: "error" */'./ErrorMessage/ErrorMessage').then(module => {
      const ErrorMessage = module.default;
      const err = new ErrorMessage();
      err.render(errorMessage);
    });
  }
}