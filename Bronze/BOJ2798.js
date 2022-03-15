// Solution 1
function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution(m, cards) {
  const DRAW_COUNT = 3;
  const combinations = getCombinations(cards, DRAW_COUNT);
  const sumCombinations = combinations
    .map((combination) => combination.reduce((acc, cur) => acc + cur, 0))
    .filter((sum) => sum <= m);

  sumCombinations.sort((a, b) => b - a);

  const maxSum = sumCombinations[0];

  return maxSum;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((value) => parseInt(value));
const cards = input[1].split(' ').map((value) => parseInt(value));

console.log(solution(m, cards));
