const indexBy = (fn, arr) =>
  arr.reduce((acc, item) => ({ ...acc, [fn(item)]: item }), {});

export default indexBy;
