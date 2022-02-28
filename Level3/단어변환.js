// Solution 1
function isConvertible(word, newWord) {
  let differenceCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== newWord[i]) {
      differenceCount += 1;

      if (differenceCount > 1) {
        return false;
      }
    }
  }

  return true;
}

function solution1(begin, target, words) {
  const visited = Array.from({ length: words.length }, () => false);
  let minCount = 0;

  if (!words.includes(target)) {
    return 0;
  }

  function dfs(word, l) {
    if (word === target) {
      minCount !== 0 ? (minCount = Math.min(minCount, l)) : (minCount = l);
    }

    if (l === words.length) {
      return;
    } else {
      for (let i = 0; i < words.length; i++) {
        if (!visited[i] && isConvertible(word, words[i])) {
          visited[i] = true;
          dfs(words[i], l + 1);
          visited[i] = false;
        }
      }
    }
  }

  dfs(begin, 0);

  return minCount;
}
