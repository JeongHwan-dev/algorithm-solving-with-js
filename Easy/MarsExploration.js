// Solution 1
function marsExploration(s) {
  const sosCount = s.length / 3;
  const expectedSignal = 'SOS'.repeat(sosCount).split('');
  const differenceCount = s
    .split('')
    .filter((value, index) => value !== expectedSignal[index]).length;

  return differenceCount;
}
