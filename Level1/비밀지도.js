// Solution 1
function solution1(n, arr1, arr2) {
  const combinedMap = [];
  const map1 = arr1.map((row) => row.toString(2).padStart(n, '0').split(''));
  const map2 = arr2.map((row) => row.toString(2).padStart(n, '0').split(''));

  for (let i = 0; i < n; i++) {
    const temp = [];

    for (let j = 0; j < n; j++) {
      map1[i][j] === '1' || map2[i][j] === '1'
        ? temp.push('#')
        : temp.push(' ');
    }

    combinedMap.push(temp.join(''));
  }

  return combinedMap;
}
