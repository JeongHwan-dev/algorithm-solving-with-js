function getCombinations(arr, selectNumber) {
  const result = [];

  if (selectNumber === 1) {
    return arr.map((value) => [value]);
  }

  arr.forEach((fixed, index, array) => {
    const rest = array.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);

    result.push(...attached);
  });

  return result;
}

function solution(orders, course) {
  const newCourses = [];

  course.forEach((len) => {
    const result = {};
    let max = Number.MIN_SAFE_INTEGER;

    orders.forEach((order) => {
      getCombinations(order.split(''), len).forEach((arr) => {
        const str = arr.sort().join('');

        if (result[str]) {
          result[str] += 1;
          max = Math.max(result[str], max);
        } else {
          result[str] = 1;
        }
      });
    });

    if (max >= 2) {
      for (const [key, value] of Object.entries(result)) {
        if (value === max) {
          newCourses.push(key);
        }
      }
    }
  });

  return newCourses.sort();
}
