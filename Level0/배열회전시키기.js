// Solution 1
function solution1(numbers, direction) {
  if (direction === 'left') {
    const firstElement = numbers.shift();

    return [...numbers, firstElement];
  }

  const lastElememt = numbers.pop();

  return [lastElememt, ...numbers];
}

// Solution 2
function solution2(numbers, direction) {
  if (direction === 'left') {
    numbers.push(numbers.shift());
  } else {
    numbers.unshift(numbers.pop());
  }

  return numbers;
}
