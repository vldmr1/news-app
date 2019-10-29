import renderNewsCard from "./NewsCard";

const renderNewsList = (articlesData) => {
  const articleSection = document.querySelector('.articles');

  articlesData.forEach(({
    author,
    title,
    description,
    url,
    urlToImage
  }) => {
    const newsCard = renderNewsCard(author, title, description, url, urlToImage);
    articleSection.appendChild(newsCard);
  })
}

export default renderNewsList;
