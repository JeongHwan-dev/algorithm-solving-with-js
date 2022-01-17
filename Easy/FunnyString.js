// Solution 1
function funnyString(s) {
  const ascii = [];
  const gap = [];

  for (let i = 0; i < s.length; i++) {
    ascii.push(s.charCodeAt(i));
  }

  for (let i = 0; i < ascii.length - 1; i++) {
    gap.push(Math.abs(ascii[i] - ascii[i + 1]));
  }

  const reversedGap = gap.slice().reverse();

  for (let i = 0; i < gap.length; i++) {
    if (gap[i] !== reversedGap[i]) {
      return 'NOT Funny';
    }
  }

  return 'Funny';
}
