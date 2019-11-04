import { CORS, DEFAULT } from '../../constants/constants';
export default class Request {
  constructor(url, method, mode = CORS, cache = DEFAULT) {
    return [
      url,
      {
        method,
        mode,
        cache,
      }
    ]
  }
}