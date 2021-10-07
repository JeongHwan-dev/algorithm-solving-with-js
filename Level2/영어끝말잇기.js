function solution(n, words) {
  const records = [words[0]];
  let end = words[0].charAt(words[0].length - 1);
  let playerNum = 0;
  let round = 0;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const start = word.charAt(0);

    if (records.includes(word) || start !== end) {
      const order = i + 1;

      playerNum = order % n === 0 ? n : order % n;
      round = Math.ceil(order / n);
      break;
    }

    end = word.charAt(word.length - 1);
    records.push(word);
  }

  return [playerNum, round];
}

console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])
);
