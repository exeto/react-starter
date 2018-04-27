const pipe = (...fns) => (...args) => {
  let result;

  fns.forEach((fn, index) => {
    result = index === 0 ? fn(...args) : fn(result);
  });

  return result;
};

export default pipe;
