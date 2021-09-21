function solution(n, arr1, arr2) {
  let finalMap = [];
  const map1 = [];
  const map2 = [];

  for (let i = 0; i < n; i++) {
    const bin1 = arr1[i].toString(2).padStart(n, '0').split('');
    const bin2 = arr2[i].toString(2).padStart(n, '0').split('');

    map1.push(bin1);
    map2.push(bin2);
  }

  finalMap = map1.map((item1, x) =>
    item1
      .map((item2, y) => (Number(item2) + Number(map2[x][y]) > 0 ? '#' : ' '))
      .join('')
  );

  return finalMap;
}
