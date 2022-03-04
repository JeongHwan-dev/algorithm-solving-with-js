// Solution 1
function getCombinationsWithRepetition(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index);
    const combinations = getCombinationsWithRepetition(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    results.push(...attached);
  });

  return results;
}

function solution1(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const combinations = getCombinationsWithRepetition(array, m);
  let result = '';

  for (const combination of combinations) {
    result += combination.join(' ') + '\n';
  }

  return result;
}

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((value) => parseInt(value));
const n = input[0];
const m = input[1];

console.log(solution1(n, m));

// Solution 2
function getCombinationsWithRepetition(array, selectNumber) {
  const combinations = [];
  const combination = Array.from({ length: selectNumber }, () => 0);

  function dfs(l, start) {
    if (l === selectNumber) {
      combinations.push(combination.slice());
    } else {
      for (let i = start; i < array.length; i++) {
        combination[l] = array[i];
        dfs(l + 1, i);
      }
    }
  }

  dfs(0, 0);

  return combinations;
}

function solution2(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const combinations = getCombinationsWithRepetition(array, m);
  let result = '';

  for (const combination of combinations) {
    result += combination.join(' ') + '\n';
  }

  return result;
}

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((value) => parseInt(value));
const n = input[0];
const m = input[1];

console.log(solution2(n, m));
