function solution(n) {
  const nums = [0, 1];

  for (let i = 2; i <= n; i++) {
    nums.push((nums[i - 2] + nums[i - 1]) % 1234567);
  }

  return nums[n];
}
