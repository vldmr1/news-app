import RequestFactory from './requests/RequestFactory';

export const fetchApiData = async(url, method) => {
  const request = new RequestFactory().createRequest(url, method);

  const response = await fetch(...request);
  const data = await response.json();

  return data;
}