function isPrime(n) {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution1(nums) {
  let answer = 0;
  let n = nums.length;
  let m = 3;
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      const sum = tmp.reduce((acc, cur) => acc + cur, 0);

      if (isPrime(sum)) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = nums[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

function solution2(nums) {
  let answer = 0;
  let n = nums.length;
  let m = 3;

  function DFS(L, s, sum) {
    if (L === m) {
      if (isPrime(sum)) {
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}
