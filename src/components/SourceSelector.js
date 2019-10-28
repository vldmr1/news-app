import { materialUiClasses } from '../constants/constants'

export default class SourceSelector {
  constructor(sourceData) {
    this.sourceData = sourceData;
  }

  render = () => {
    const { MDC_LIST_ITEM } = materialUiClasses;
    const sourceDropDown = document.querySelector('.source-selector');
    const sourceNames = Object.keys(this.sourceData);

    sourceNames.forEach(name => {
      const li = document.createElement('li');
      li.setAttribute('data-value', name);
      li.classList.add(MDC_LIST_ITEM);
      li.innerText = name;

      sourceDropDown.appendChild(li);
    });
  }
}