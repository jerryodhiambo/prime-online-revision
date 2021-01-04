export const paramaterFormater = (params) => {
  Object.keys(params).forEach((p) => {
    if (
      params[p] === '' ||
      params[p] === undefined ||
      params[p] === null ||
      params[p] === 'All'
    ) {
      delete params[p];
    }
    return params;
  });
};
