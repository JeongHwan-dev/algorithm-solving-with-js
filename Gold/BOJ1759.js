const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [l, c] = input[0].split(' ').map((num) => Number(num));
const arr = input[1].split(' ').sort();

// Solution 1
const result = solution(l, c, arr);

for (const password of result) {
  console.log(password);
}

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

function isVowel(alphabet) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return vowels.includes(alphabet);
}

function solution(l, c, arr) {
  const passwordCombinations = getCombinations(arr, l);
  const filteredPasswordCombinations = passwordCombinations
    .filter((combination) => {
      const vowelCount = combination.filter((alphabet) =>
        isVowel(alphabet)
      ).length;

      return vowelCount >= 1 && l - vowelCount >= 2 ? true : false;
    })
    .map((combination) => combination.join(''));

  return filteredPasswordCombinations;
}
