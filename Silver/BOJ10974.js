const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((element) => Number(element));
const N = input[0];

// Solution 1
solution1(N);

function getPermutations(array, selectNumber) {
  const result = [];

  if (selectNumber === 1) {
    return array.map((item) => [item]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...attached);
  });

  return result;
}

function solution1(n) {
  const numberArray = Array.from({ length: n }, (_, index) => index + 1);
  const permutations = getPermutations(numberArray, n);

  for (const permutation of permutations) {
    console.log(permutation.join(' '));
  }
}

// Solution 2
solution2(N);

function solution2(n) {
  const permutations = [];
  const permutation = Array.from({ length: n }, () => 0);
  const numberArray = Array.from({ length: n }, (_, index) => index + 1);
  const visited = Array.from({ length: n }, () => false);

  function dfs(l) {
    if (l === n) {
      permutations.push(permutation.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (!visited[i]) {
          visited[i] = true;
          permutation[l] = numberArray[i];
          dfs(l + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(0);

  for (const permutation of permutations) {
    console.log(permutation.join(' '));
  }
}
