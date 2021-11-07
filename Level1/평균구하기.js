// Solution 1
function solution1(arr) {
  let answer = 0;
  let sum = 0;

  for (let n of arr) {
    sum += n;
  }

  answer = sum / arr.length;

  return answer;
}

// Solution 2
function solution2(arr) {
  const n = arr.length;
  const sum = arr.reduce((acc, cur) => acc + cur);
  const average = sum / n;

  return average;
}

// Solution 3
function solution3(arr) {
  const average = arr.reduce((acc, cur) => acc + cur) / arr.length;

  return average;
}
