// Solution 1
function getPermutationsWithRepetition(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed) => {
    const permutations = getPermutationsWithRepetition(array, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });

  return results;
}

function solution1(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const permutations = getPermutationsWithRepetition(array, m);
  let result = '';

  for (const permutation of permutations) {
    result += permutation.join(' ') + '\n';
  }

  return result;
}

// Solution 2
function getPermutationsWithRepetition(array, selectNumber) {
  const permutations = [];
  const permutation = Array.from({ length: selectNumber }, () => 0);

  function dfs(l) {
    if (l === selectNumber) {
      permutations.push(permutation.slice());
    } else {
      for (let i = 0; i < array.length; i++) {
        permutation[l] = array[i];
        dfs(l + 1);
      }
    }
  }

  dfs(0);

  return permutations;
}

function solution2(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const permutations = getPermutationsWithRepetition(array, m);
  let result = '';

  for (const permutation of permutations) {
    result += permutation.join(' ') + '\n';
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

console.log(solution2(n, m));
