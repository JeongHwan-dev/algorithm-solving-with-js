// Solution 1
function solution1(slice, n) {
  const numberOfPizza = Math.floor(n / slice);
  const rest = n % slice;

  return rest === 0 ? numberOfPizza : numberOfPizza + 1;
}

// Solution 2
function solution2(slice, n) {
  return Math.ceil(n / slice);
}
