import { materialUiClasses } from '../constants/constants'

export default class SourceSelector {
  constructor(sourceData) {
    this.sourceData = sourceData;
  }

  render = () => {
    try {
      if (!this.sourceData) throw new Error('Unable to process Source Data');
    } catch(err) {
      document.querySelector('.select-label').innerText = err;
      return;
    }

    const {
      MDC_LIST_ITEM,
      MDC_TYPOGRAPHY,
      MDC_TYPOGRAPHY_HEADLINE_5,
    } = materialUiClasses;
    const sourceDropDown = document.querySelector('.source-selector');
    const sourceNames = Object.keys(this.sourceData);

    sourceNames.forEach(name => {
      const li = document.createElement('li');
      li.setAttribute('data-value', name);
      li.classList.add(MDC_LIST_ITEM, MDC_TYPOGRAPHY, MDC_TYPOGRAPHY_HEADLINE_5);
      li.innerText = name;

      sourceDropDown.appendChild(li);
    });
  }
}