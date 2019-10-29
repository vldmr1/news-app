import NewsCard from "./NewsCard";

export default class NewsList {
  constructor(articlesData) {
    this.articlesData = articlesData;
  }

  render = () => {
    const articleSection = document.querySelector('.articles');

    try {
      if (!this.articlesData) throw new Error('Unable to process Articles Data');
    } catch(err) {
      articleSection.innerText = 'Unable to process Articles Data';
      return;
    }

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