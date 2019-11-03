import { MDCSelect } from '@material/select';

import { errorMessages } from '../constants/constants';
import { getListOfSources, getArticlesData } from '../services/data-service';
import renderSourceSelector from './SourceSelector';
import renderNewsList from './NewsList';
// import renderErrorMessage from './ErrorMessage';
import '../style/index.scss';

export default class NewsApp {
  init = async () => {
    const { ERROR_SOURCES } = errorMessages;

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
    const { ERROR_ARTICLES } = errorMessages;

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
    } catch(err) {
      console.log(err);
      this.errorHandler(ERROR_ARTICLES);
    }
  }

  errorHandler = (errorMessage) => {
    import('./ErrorMessage/ErrorMessage').then(module => {
      const renderErrorMessage = module.default;
      renderErrorMessage(errorMessage);
    });
  }
}