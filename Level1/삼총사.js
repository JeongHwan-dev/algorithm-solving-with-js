// Solution 1
const NUMBER_OF_A_TEAM = 3;

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

function solution(number) {
  const trioCombinations = getCombinations(number, NUMBER_OF_A_TEAM);

  return trioCombinations.filter(
    (trioCombination) => trioCombination.reduce((acc, cur) => acc + cur, 0) === 0
  ).length;
}
