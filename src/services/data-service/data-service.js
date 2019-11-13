import RequestFactory from '../requests/RequestFactory';

export const fetchApiData = async(url, method) => {
  const observedFactory = new Proxy(new RequestFactory().createRequest, requestLogger);
  const request = observedFactory(url, method);

  const response = await fetch(...request);
  const data = await response.json();

  return data;
}

const requestLogger = {
  apply(target, thisArg, args) {
    console.log('REQUEST PARAMETERS:');
    console.table({
      url: args[0],
      method: args[1],
      mode: args[2] ? args[2] : 'none',
      cache: args[3] ? args[3] : 'none',
     });
    return target(...args);
  }
}
