// Solution 1
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return mid + 1;
}

function getInfoObject(info) {
  const infoObject = {};

  info.forEach((row) => {
    const array = row.split(' ');
    const score = parseInt(array.pop());
    const key = array.join('');

    if (infoObject[key]) {
      infoObject[key].push(score);
    } else {
      infoObject[key] = [score];
    }
  });

  for (const key in infoObject) {
    infoObject[key].sort((a, b) => a - b);
  }

  return infoObject;
}

function getHeadcount(infoObject, query, score) {
  const infoObjectKey = Object.keys(infoObject);

  return infoObjectKey
    .filter((key) => query.every((value) => key.includes(value)))
    .reduce(
      (acc, key) =>
        acc + infoObject[key].length - binarySearch(infoObject[key], score),
      0
    );
}

function solution(info, query) {
  const result = [];
  const infoObject = getInfoObject(info);

  query
    .map((item) => item.split(/ and | |-/i))
    .filter((value) => value !== '')
    .forEach((query) => {
      const score = query.pop();
      const headcount = getHeadcount(infoObject, query, score);

      result.push(headcount);
    });

  return result;
}
