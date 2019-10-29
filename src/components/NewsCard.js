import { materialUiClasses } from '../constants/constants';

export default class NewsCard {
  constructor(author, title, description, url, urlToImage) {
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
  }

  render = () => {
    const {
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
      MDC_TYPOGRAPHY_SUBTITLE_1,
      MDC_TYPOGRAPHY_BODY_1,
      MDC_BUTTON,
      MDC_CARD_ACTION_BUTTON,
      MDC_BUTTON_UNELEVATED,
    } = materialUiClasses;

    const card = document.createElement('div');
    card.classList.add(MDC_CARD, 'mdc-layout-grid__cell', 'news-card');

    card.innerHTML = `
      <div class="${MDC_CARD_PRIMARY_ACTION} news-card-primary" tabindex="0">
        <div class="${MDC_CARD_MEDIA} ${MDC_CARD_MEDIA_16_9} news-card-image" style="background-image: url('${this.urlToImage ? this.urlToImage : 'https://polarexpedition.net/assets/img/placeholder.svg'}');">
          <div class="${MDC_CARD_MEDIA_CONTENT} news-card-content">
            <div>
              <h2 class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_HEADLINE_4} news-card-title">${this.title}</h2>
              ${this.author ? `<h3 class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_SUBTITLE_1} news-card-author">by ${this.author}</h3>` : ''}
            </div>
          </div>
        </div>
        <div class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_BODY_1} news-card-description">${this.description ? this.description : ''}</div>
      </div>
      <div class="${MDC_CARD_ACTIONS}">
        <div class="${MDC_CARD_ACTION_BUTTONS}">
          <a class="${MDC_BUTTON} ${MDC_CARD_ACTION} ${MDC_CARD_ACTION_BUTTON} ${MDC_BUTTON_UNELEVATED} read-more-button" href="${this.url}">Read More</a>
        </div>
      </div>
    `

    return card;
  }
}