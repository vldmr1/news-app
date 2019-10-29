import { httpRequestConstants } from '../constants/constants';

export const getListOfSources = async () => {
  const { SOURCES_URL, API_KEY } = httpRequestConstants;

  const response = await fetch(`${SOURCES_URL}?apiKey=${API_KEY}`);
  const data = await response.json();

  return data.sources;
}

export const getArticlesData = async (sourceName) => {
  const { ARTICLES_URL, API_KEY } = httpRequestConstants;

  const response = await fetch(`${ARTICLES_URL}${sourceName}&apiKey=${API_KEY}`);
  const data = await response.json();

  return data.articles;
}

