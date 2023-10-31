// Solution 1
function solution(s) {
  const positions = {};

  return [...s].map((alphabet, index) => {
    const distance = positions[alphabet] === undefined ? -1 : index - positions[alphabet];

    positions[alphabet] = index;

    return distance;
  });
}
