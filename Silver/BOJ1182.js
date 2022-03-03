// Solution 1
function solution1(n, s, arr) {
  let numberOfCases = 0;

  function dfs(l, sum) {
    if (l === n) {
      return;
    }

    sum += arr[l];

    if (sum === s) {
      numberOfCases += 1;
    }

    dfs(l + 1, sum);
    dfs(l + 1, sum - arr[l]);
  }

  dfs(0, 0);

  return numberOfCases;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map((item) => Number(item));
const arr = input[1].split(' ').map((item) => Number(item));

console.log(solution1(n, s, arr));

// Solution 2
function solution2(n, s, arr) {
  let numberOfCases = 0;

  function dfs(l, sum, str) {
    if (l === n) {
      if (sum === s) {
        numberOfCases += 1;
      }
    } else {
      dfs(l + 1, sum + arr[l], str + `+${arr[l]}`);
      dfs(l + 1, sum, str);
    }
  }

  dfs(0, 0, '');

  return s === 0 ? numberOfCases - 1 : numberOfCases;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map((item) => Number(item));
const arr = input[1].split(' ').map((item) => Number(item));

console.log(solution2(n, s, arr));
