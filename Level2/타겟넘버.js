// Solution 1
function solution1(numbers, target) {
  const n = numbers.length;
  let count = 0;

  function DFS(i, sum) {
    if (i === n) {
      if (sum === target) {
        count++;
      }
    } else {
      DFS(i + 1, sum + numbers[i]);
      DFS(i + 1, sum - numbers[i]);
    }
  }

  DFS(0, 0);

  return count;
}

// Solution 2
function solution2(numbers, target) {
  const n = numbers.length;
  const ways = [];

  function DFS(i, array) {
    if (i === n) {
      ways.push(array);
    } else {
      DFS(i + 1, [...array, `+${numbers[i]}`]);
      DFS(i + 1, [...array, `-${numbers[i]}`]);
    }
  }

  DFS(0, []);

  const count = ways
    .map((way) => way.reduce((acc, cur) => acc + parseInt(cur), 0))
    .filter((sum) => sum === target).length;

  return count;
}
