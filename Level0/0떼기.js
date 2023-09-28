// Solution 1
function solution1(n_str) {
  const numArray = [...n_str];

  while (numArray.length > 0) {
    const num = numArray.shift();

    if (num === '0') {
      continue;
    }

    numArray.unshift(num);
    break;
  }

  return numArray.join('');
}

// Solution 2
function solution2(n_str) {
  return String(Number(n_str));
}
