function isPrimeNumber(number) {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Solution 1
function solution1(nums) {
  let primeNumberCount = 0;
  const n = 3;
  const len = nums.length;
  const temp = Array.from({ length: n }, () => 0);

  function DFS(l, s) {
    if (l === n) {
      const sum = temp.reduce((acc, cur) => acc + cur, 0);

      if (isPrimeNumber(sum)) {
        primeNumberCount++;
      }
    } else {
      for (let i = s; i < len; i++) {
        temp[l] = nums[i];
        DFS(l + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return primeNumberCount;
}

// Solution 2
function solution2(nums) {
  let primeNumberCount = 0;
  const n = 3;
  const len = nums.length;

  function DFS(l, s, sum) {
    if (l === n) {
      if (isPrimeNumber(sum)) {
        primeNumberCount++;
      }
    } else {
      for (let i = s; i < len; i++) {
        DFS(l + 1, i + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return primeNumberCount;
}

// Solution 3
function solution3(nums) {
  let primeNumberCount = 0;
  const n = 3;
  const len = nums.length;
  const check = Array.from({ length: n }, () => 0);

  function DFS(l, count, sum) {
    if (count === n) {
      if (isPrimeNumber(sum)) {
        primeNumberCount++;
      }

      return;
    }

    if (l === len) {
      return;
    } else {
      check[l] = 1;
      DFS(l + 1, count + 1, sum + nums[l]);
      check[l] = 0;
      DFS(l + 1, count, sum);
    }
  }

  DFS(0, 0, 0);

  return primeNumberCount;
}
