// Solution 1
const solution = (my_string, m, c) =>
  [...my_string].reduce((acc, cur, index) => (index % m === c - 1 ? acc + cur : acc), '');
