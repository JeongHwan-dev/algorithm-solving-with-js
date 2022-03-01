// Solution 1
function solution1(v) {
  const xMap = new Map();
  const yMap = new Map();
  const coordinate = [];

  v.forEach(([x, y]) => {
    xMap.has(x) ? xMap.set(x, xMap.get(x) + 1) : xMap.set(x, 1);
    yMap.has(y) ? yMap.set(y, yMap.get(y) + 1) : yMap.set(y, 1);
  });

  for (const [key, count] of xMap) {
    if (count % 2 !== 0) {
      coordinate.push(key);
      break;
    }
  }

  for (const [key, count] of yMap) {
    if (count % 2 !== 0) {
      coordinate.push(key);
      break;
    }
  }

  return coordinate;
}

// Solution 2
function getLastPoint(array) {
  const map = new Map();

  array.forEach((point) =>
    map.has(point) ? map.set(point, map.get(point) + 1) : map.set(point, 1)
  );

  for (const [key, count] of map) {
    if (count % 2 !== 0) {
      return key;
    }
  }
}

function solution2(v) {
  const xPointArray = v.map(([x, y]) => x);
  const yPointArray = v.map(([x, y]) => y);
  const coordinate = [getLastPoint(xPointArray), getLastPoint(yPointArray)];

  return coordinate;
}
