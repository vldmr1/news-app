import { materialUiClasses } from '../../constants/constants';


export default class ErrorMessage {
  constructor() {
    if (typeof ErrorMessage.instance === 'object') {
      return ErrorMessage.instance;
    }

    ErrorMessage.instance = this;
    return ErrorMessage.instance;
  }

  render = (messageText) => {
    const {
      MDC_LAYOUT_GRID_CELL,
      MDC_LAYOUT_GRID_CELL_SPAN_12,
      MDC_TYPOGRAPHY,
      MDC_TYPOGRAPHY_HEADLINE_2,
    } = materialUiClasses;

    const articlesSection = document.querySelector('.articles');
    articlesSection.innerHTML = '';
    articlesSection.innerHTML = `
      <div class="${MDC_LAYOUT_GRID_CELL} ${MDC_LAYOUT_GRID_CELL_SPAN_12} ${MDC_TYPOGRAPHY} error-container">
        <p class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_HEADLINE_2} error-message">ERROR: ${messageText}</p>
      </div>
    `
  }
}
