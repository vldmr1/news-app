import RequestFactory from './requests/RequestFactory';
import urlBuilder from '../utils/url-builder';

export const fetchApiData = async({ url, method }) => {
  const urlString = urlBuilder(url);
  const request = new RequestFactory().createRequest(urlString, method);

  const response = await fetch(...request);
  const data = await response.json();

  return data;
}