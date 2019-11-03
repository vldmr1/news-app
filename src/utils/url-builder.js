const urlBuilder = ({ baseUrl, paths, params }) => {
  const queryUrl = paths.reduce((url, path) => {
    return url + path;
  }, baseUrl);

  const queryParams = Object.entries(params)
    .map(([name, value]) => {
      return `${name}=${value}`
    })
    .join('&');

  return `${queryUrl}?${queryParams}`;
}

export default urlBuilder;