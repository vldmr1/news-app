const queryBuilder = (method, baseUrl, paths, params) => {
  return {
    method,
    url: {
      baseUrl,
      paths,
      params,
    }
  }
}

export default queryBuilder;