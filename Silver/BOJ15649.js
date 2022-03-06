// Solution 1
function getPermutations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });

  return results;
}

function solution1(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const permutations = getPermutations(array, m);
  let result = '';

  for (const permutation of permutations) {
    result += permutation.join(' ') + '\n';
  }

  return result;
}

// Solution 2
function getPermutations(array, selectNumber) {
  const len = array.length;
  const permutations = [];
  const permutation = Array.from({ length: selectNumber }, () => 0);
  const visited = Array.from({ length: len }, () => false);

  function dfs(l) {
    if (l === selectNumber) {
      permutations.push(permutation.slice());
    } else {
      for (let i = 0; i < len; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permutation[l] = array[i];
          dfs(l + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(0);

  return permutations;
}

function solution2(n, m) {
  const array = Array.from({ length: n }, (_, index) => index + 1);
  const permutations = getPermutations(array, m);
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
