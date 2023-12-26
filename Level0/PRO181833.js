// Solution 1
function solution(n) {
  return Array.from({ length: n }, (_, firstIndex) =>
    Array.from({ length: n }, (_, secondIndex) => (firstIndex === secondIndex ? 1 : 0))
  );
}
