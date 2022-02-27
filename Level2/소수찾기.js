// Solution 1
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function getPermutations(array, selectNumber) {
  const results = [];

  if (selectNumber === 1) {
    return array.map((value) => [value]);
  } else {
    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);

      results.push(...attached);
    });
  }

  return results;
}

function solution1(numbers) {
  const splittedNumbers = numbers.split('');
  const permutationArray = [];

  for (let i = 1; i <= splittedNumbers.length; i++) {
    permutationArray.push(
      ...getPermutations(splittedNumbers, i).map((array) =>
        Number(array.join(''))
      )
    );
  }

  const permutationSet = new Set(permutationArray);
  const count = Array.from(permutationSet).filter((num) =>
    isPrimeNumber(num)
  ).length;

  return count;
}

// Solution 2
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

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

function solution2(numbers) {
  const numberArray = numbers.split('');
  const allOfPermutations = [];

  for (let i = 1; i <= numbers.length; i++) {
    const permutations = getPermutations(numberArray, i);
    const numbers = permutations.map((permutation) =>
      parseInt(permutation.join(''))
    );

    allOfPermutations.push(...numbers);
  }

  const permutationSet = new Set(allOfPermutations);
  const primeNumberCount = Array.from(permutationSet).filter((number) =>
    isPrimeNumber(number)
  ).length;

  return primeNumberCount;
}
