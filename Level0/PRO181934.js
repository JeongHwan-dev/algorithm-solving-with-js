// solution 1
const solution = (ineq, eq, n, m) => {
  if (eq === '=') {
    return ineq === '>' ? Number(n >= m) : Number(n <= m);
  }

  return ineq === '<' ? Number(n < m) : Number(n > m);
};
