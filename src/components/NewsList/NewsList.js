import renderNewsCard from "../NewsCard/NewsCard";

const renderNewsList = (articlesData) => {
  const articleSection = document.querySelector('.articles');
  const listFragment = document.createDocumentFragment();

  articlesData.forEach(article => {
    const newsCard = renderNewsCard(article);
    listFragment.appendChild(newsCard);
  });

  articleSection.appendChild(listFragment);
}

export default renderNewsList;
