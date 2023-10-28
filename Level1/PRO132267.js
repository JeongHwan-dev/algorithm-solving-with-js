// Solution 1
function solution(a, b, n) {
  let numberOfCokeBottles = 0;

  while (n >= a) {
    const numberOfRewardedCokeBottles = Math.floor(n / a) * b;

    numberOfCokeBottles += numberOfRewardedCokeBottles;
    n = numberOfRewardedCokeBottles + (n % a);
  }

  return numberOfCokeBottles;
}
