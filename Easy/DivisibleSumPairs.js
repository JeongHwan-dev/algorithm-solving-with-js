// Solution 1
function getCombinations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((value) => [value]);
  }

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attacted = combinations.map((combinations) => [
      fixed,
      ...combinations,
    ]);

    results.push(...attacted);
  });

  return results;
}

function divisibleSumPairs(n, k, ar) {
  const combinations = getCombinations(ar, 2);
  const numberOfPairs = combinations.filter(
    (combination) => combination.reduce((acc, cur) => acc + cur, 0) % k === 0
  ).length;

  return numberOfPairs;
}
