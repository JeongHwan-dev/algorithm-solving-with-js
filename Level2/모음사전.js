function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  const words = [];

  function DFS(vowels, L, n, arr = []) {
    if (L === n) {
      const str = arr.join('');

      words.push(str);
    } else {
      for (let i = 0; i < vowels.length; i++) {
        arr.push(vowels[i]);
        DFS(vowels, L + 1, n, arr);
        arr.pop();
      }
    }
  }

  for (let n = 1; n <= 5; n++) {
    DFS(vowels, 0, n);
  }

  const order = words.sort().indexOf(word) + 1;

  return order;
}
