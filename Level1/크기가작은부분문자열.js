// Solution 1
function solution1(t, p) {
  let count = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const str = t.slice(i, i + p.length);

    if (Number(p) >= Number(str)) {
      count += 1;
    }
  }

  return count;
}

// Solution 2
function solution2(t, p) {
  const numList = [];

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const num = Number(t.slice(i, i + p.length));

    numList.push(num);
  }

  return numList.filter((num) => num <= Number(p)).length;
}
