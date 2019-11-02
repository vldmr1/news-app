const API_KEY = 'ae5339fbacb349d0b8f0f88cd3e56754';
const SOURCES_URL = 'https://newsapi.org/v1/sources';
const ARTICLES_URL = 'https://newsapi.org/v1/articles?source=';

// MaterialUI Class Names
const MDC_LIST_ITEM = 'mdc-list-item';
const MDC_CARD = 'mdc-card';
const MDC_CARD_ACTION = 'mdc-card__action';
const MDC_CARD_ACTIONS = 'mdc-card__actions';
const MDC_CARD_ACTION_BUTTONS = 'mdc-card__action-buttons';
const MDC_CARD_PRIMARY_ACTION = 'mdc-card__primary-action';
const MDC_CARD_MEDIA = 'mdc-card__media'
const MDC_CARD_MEDIA_16_9 = 'mdc-card__media--16-9';
const MDC_CARD_MEDIA_CONTENT = 'mdc-card__media-content';
const MDC_TYPOGRAPHY = 'mdc-typography';
const MDC_TYPOGRAPHY_HEADLINE_2 = 'mdc-typography--headline2';
const MDC_TYPOGRAPHY_HEADLINE_4 = 'mdc-typography--headline4';
const MDC_TYPOGRAPHY_SUBTITLE_1 = 'mdc-typography--subtitle1';
const MDC_TYPOGRAPHY_BODY_1 = 'mdc-typography--body1';
const MDC_BUTTON = 'mdc-button';
const MDC_CARD_ACTION_BUTTON = 'mdc-card__action--button';
const MDC_BUTTON_UNELEVATED = 'mdc-button--unelevated';
const MDC_TYPOGRAPHY_HEADLINE_5 = 'mdc-typography--headline5';
const MDC_LAYOUT_GRID_CELL = 'mdc-layout-grid__cell';
const MDC_LAYOUT_GRID_CELL_SPAN_12 = 'mdc-layout-grid__cell--span-12';

const ERROR_SOURCES = 'Unable to process Source Data';
const ERROR_ARTICLES = 'Unable to process Articles Data';

export const httpRequestConstants = {
  API_KEY,
  SOURCES_URL,
  ARTICLES_URL,
};

export const materialUiClasses = {
  MDC_LIST_ITEM,
  MDC_CARD,
  MDC_CARD_ACTION,
  MDC_CARD_ACTIONS,
  MDC_CARD_ACTION_BUTTONS,
  MDC_CARD_PRIMARY_ACTION,
  MDC_CARD_MEDIA,
  MDC_CARD_MEDIA_CONTENT,
  MDC_CARD_MEDIA_16_9,
  MDC_TYPOGRAPHY,
  MDC_TYPOGRAPHY_HEADLINE_4,
  MDC_TYPOGRAPHY_HEADLINE_2,
  MDC_TYPOGRAPHY_SUBTITLE_1,
  MDC_TYPOGRAPHY_BODY_1,
  MDC_BUTTON,
  MDC_CARD_ACTION_BUTTON,
  MDC_BUTTON_UNELEVATED,
  MDC_TYPOGRAPHY_HEADLINE_5,
  MDC_LAYOUT_GRID_CELL,
  MDC_LAYOUT_GRID_CELL_SPAN_12,
};

export const errorMessages = {
  ERROR_ARTICLES,
  ERROR_SOURCES,
}