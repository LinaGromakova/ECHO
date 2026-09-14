export const debounce = <Args extends unknown[], R>(
  fn: (...args: Args) => R,
  ms: number,
) => {
  let timeout: number | undefined;
  return (...args: Args): void => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

export default debounce;
