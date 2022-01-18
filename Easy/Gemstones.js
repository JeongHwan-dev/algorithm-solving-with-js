// Solution 1
function gemstones(arr) {
  const temp = arr[0];
  const result = [];

  for (const value of temp) {
    let count = 0;

    if (result.includes(value)) {
      continue;
    }

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].indexOf(value) === -1) {
        break;
      } else {
        count++;
      }
    }

    if (count === arr.length - 1) {
      result.push(value);
    }
  }

  const gemstoneCount = new Set(result).size;

  return gemstoneCount;
}
