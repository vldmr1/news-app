import {
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
} from '../../constants/constants';

const renderNewsCard = ({ author, title, description, url, urlToImage }) => {

  const card = document.createElement('div');
  card.classList.add(MDC_CARD, 'mdc-layout-grid__cell', 'news-card');

  card.innerHTML = `
    <div class="${MDC_CARD_PRIMARY_ACTION} news-card-primary" tabindex="0">
      <div class="${MDC_CARD_MEDIA} ${MDC_CARD_MEDIA_16_9} news-card-image" style="background-image: url('${urlToImage ? urlToImage : 'https://polarexpedition.net/assets/img/placeholder.svg'}');">
        <div class="${MDC_CARD_MEDIA_CONTENT} news-card-content">
          <div>
            <h2 class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_HEADLINE_4} news-card-title">${title}</h2>
            ${author && !author.includes('http') ? `<h3 class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_SUBTITLE_1} news-card-author">by ${author}</h3>` : ''}
          </div>
        </div>
      </div>
      <div class="${MDC_TYPOGRAPHY} ${MDC_TYPOGRAPHY_BODY_1} news-card-description">${description ? description : ''}</div>
    </div>
    <div class="${MDC_CARD_ACTIONS}">
      <div class="${MDC_CARD_ACTION_BUTTONS}">
        <a class="${MDC_BUTTON} ${MDC_CARD_ACTION} ${MDC_CARD_ACTION_BUTTON} ${MDC_BUTTON_UNELEVATED} read-more-button" href="${url}">Read More</a>
      </div>
    </div>
  `

  return card;
}

export default renderNewsCard;
