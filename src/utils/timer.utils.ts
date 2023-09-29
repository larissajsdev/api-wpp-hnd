export const timer = (second: number) =>
  new Promise((res) => setTimeout(res, second * 1000));
