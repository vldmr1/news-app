import NewsCard from "./NewsCard";

export default class NewsList {
  constructor(articlesData) {
    this.articlesData = articlesData;
  }

  render = () => {
    const articleSection = document.querySelector('.articles')

    this.articlesData.forEach(({
      author,
      title,
      description,
      url,
      urlToImage
    }) => {
      const newsCard = new NewsCard(author, title, description, url, urlToImage).render();
      articleSection.appendChild(newsCard);
    })
  }
}