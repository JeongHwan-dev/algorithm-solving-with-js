// Solution 1
function solution1(numbers) {
  const uniqueSumArray = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (!uniqueSumArray.includes(sum)) {
        uniqueSumArray.push(sum);
      }
    }
  }

  uniqueSumArray.sort((a, b) => a - b);

  return uniqueSumArray;
}

// Solution 2
function solution2(numbers) {
  const sumArray = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumArray.push(numbers[i] + numbers[j]);
    }
  }

  const set = new Set(sumArray);
  const result = [...set];

  result.sort((a, b) => a - b);

  return result;
}

// Solution 3
function solution3(numbers) {
  const sumArray = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumArray.push(numbers[i] + numbers[j]);
    }
  }

  const uniqueSumArray = sumArray.filter((num, index) => {
    return sumArray.indexOf(num) === index;
  });

  uniqueSumArray.sort((a, b) => a - b);

  return uniqueSumArray;
}

// Solution 4
function solution4(numbers) {
  const sumArray = [];
  const uniqueSumArray = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sumArray.push(numbers[i] + numbers[j]);
    }
  }

  sumArray.forEach((num) => {
    if (!uniqueSumArray.includes(num)) {
      uniqueSumArray.push(num);
    }
  });

  uniqueSumArray.sort((a, b) => a - b);

  return uniqueSumArray;
}
