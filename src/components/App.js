import { MDCSelect } from '@material/select';

import { ERROR_SOURCES, ERROR_ARTICLES, BASE_URL, API_KEY, GET } from '../constants/constants';
import { getListOfSources, getArticlesData, fetchApiData } from '../services/data-service';
import renderSourceSelector from './SourceSelector';
import renderNewsList from './NewsList';
import '../style/index.scss';

export default class NewsApp {
  init = async () => {
    try {
      this.sourceData = await this.getSourcesData().catch(console.log);
      renderSourceSelector(this.sourceData);
    } catch {
      this.errorHandler(ERROR_SOURCES);
      return;
    }

    this.addSelectorListener();
  }

  getSourcesData = async () => {
    const apiQuery = {
      method: GET,
      url: {
        baseUrl: BASE_URL,
        paths: ['/sources'],
        params: {
          apiKey: API_KEY,
        },
      }
    }

    const data = await fetchApiData(apiQuery);

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
    if (this.currentSource === value) {
      return;
    }

    this.currentSource = value;
    const articleId = this.sourceData[value];

    const articleSection = document.querySelector('.articles');
    articleSection.innerHTML = '';

    const apiQuery = {
      method: GET,
      url: {
        baseUrl: BASE_URL,
        paths: ['/articles'],
        params: {
          apiKey: API_KEY,
          source: articleId,
        },
      },
    }

    try {
      const data = await fetchApiData(apiQuery).catch(console.log);
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