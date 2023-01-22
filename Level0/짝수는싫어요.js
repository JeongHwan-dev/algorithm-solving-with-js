function solution(n) {
  return Array.from({ length: n }, (_, index) => index + 1).filter((num) => num % 2 !== 0);
}
