// Solution 1
const solution = (number) => [...String(number)].reduce((acc, cur) => acc + Number(cur), 0) % 9;
