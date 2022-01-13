// Solution 1
function hackerrankInString(s) {
  const queue = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k'];
  const splittedS = s.split('');

  for (const alphabet of splittedS) {
    if (queue[0] === alphabet) {
      queue.shift();
    }
  }

  return queue.length === 0 ? 'YES' : 'NO';
}
