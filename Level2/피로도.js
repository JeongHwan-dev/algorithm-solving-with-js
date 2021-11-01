function solution(k, dungeons) {
  const len = dungeons.length;
  const check = Array.from({ length: len }, () => false);
  let maxCount = Number.MIN_SAFE_INTEGER;

  function dfs(fatigue, dungeons, count) {
    for (let i = 0; i < len; i++) {
      const [requirement, consumption] = dungeons[i];

      if (!check[i] && requirement <= fatigue) {
        check[i] = true;
        dfs(fatigue - consumption, dungeons, count + 1);
        check[i] = false;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  dfs(k, dungeons, 0);

  return maxCount;
}
