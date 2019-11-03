export default class Request {
  constructor(url, method, mode = 'cors', cache = 'default') {
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