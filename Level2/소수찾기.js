function isPrime(num) {
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

function solution(numbers) {
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
  const count = Array.from(permutationSet).filter((num) => isPrime(num)).length;

  return count;
}
