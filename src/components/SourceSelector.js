import { MDC_LIST_ITEM, MDC_TYPOGRAPHY, MDC_TYPOGRAPHY_HEADLINE_5 } from '../constants/constants'

const renderSourceSelector = (sourceData) => {
  const sourceDropDown = document.querySelector('.source-selector');
  const listFragment = document.createDocumentFragment();
  const sourceNames = Object.keys(sourceData);

  sourceNames.forEach(name => {
    const li = document.createElement('li');
    li.setAttribute('data-value', name);
    li.classList.add(MDC_LIST_ITEM, MDC_TYPOGRAPHY, MDC_TYPOGRAPHY_HEADLINE_5);
    li.innerText = name;

    listFragment.appendChild(li);
  });

  sourceDropDown.appendChild(listFragment);
}

export default renderSourceSelector;
