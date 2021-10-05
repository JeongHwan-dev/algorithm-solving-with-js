function solution(clothes) {
  let combination = 1;
  const map = new Map();

  clothes.forEach((item) =>
    map.has(item[1])
      ? map.set(item[1], map.get(item[1]) + 1)
      : map.set(item[1], 2)
  );

  for (const [key] of map) {
    combination *= map.get(key);
  }

  combination--;

  return combination;
}
