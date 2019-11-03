import Request from './Request';
import { GET, PUT, POST, DELETE } from '../../constants/constants';

export default class RequestFactory {
  createRequest = (url, method, mode, cache) => {
    let request;

    switch (method) {
      case GET:
        request = new Request(url, GET, 'cors', 'no-cache');
        break;
      case PUT:
        request = new Request(url, PUT, mode, cache);
        break;
      case POST:
        request = new Request(url, POST, mode, cache)
        break;
      case DELETE:
          request = new Request(url, DELETE, mode, cache)
        break;
      default:
        break;
    }

    return request;
  }
}