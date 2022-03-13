// Solution 1
function solution(n, k, coins) {
  let minCoinCount = 0;

  for (let i = n - 1; i >= 0; i--) {
    const count = parseInt(k / coins[i]);

    if (count !== 0) {
      k = k % coins[i];
      minCoinCount += count;
    }
  }

  return minCoinCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((value) => parseInt(value));
const coins = input.slice(1).map((value) => parseInt(value));

console.log(solution(n, k, coins));
