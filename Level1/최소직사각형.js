// Solution 1
function solution1(sizes) {
  sizes.forEach((size) => size.sort((a, b) => b - a));

  const widthSizes = sizes.map((size) => size[0]);
  const heightSizes = sizes.map((size) => size[1]);
  const maxWidth = Math.max(...widthSizes);
  const maxHeight = Math.max(...heightSizes);
  const area = maxWidth * maxHeight;

  return area;
}

// Solution 2
function solution2(sizes) {
  sizes.forEach((size) => size.sort((a, b) => b - a));

  const widthSizes = [];
  const heightSizes = [];

  sizes.forEach((size) => {
    widthSizes.push(size[0]);
    heightSizes.push(size[1]);
  });

  const maxWidth = Math.max(...widthSizes);
  const maxHeight = Math.max(...heightSizes);
  const area = maxWidth * maxHeight;

  return area;
}

// Solution 3
function solution3(sizes) {
  sizes.forEach((size) => size.sort((a, b) => b - a));

  const maxWidth = Math.max(...sizes.map((size) => size[0]));
  const maxHeight = Math.max(...sizes.map((size) => size[1]));
  const area = maxWidth * maxHeight;

  return area;
}

// Solution 4
function solution4(sizes) {
  const _sizes = sizes.map((size) => size.slice().sort((a, b) => a - b));
  const maxWidth = Math.max(..._sizes.map((size) => size[0]));
  const maxHeight = Math.max(..._sizes.map((size) => size[1]));
  const area = maxWidth * maxHeight;

  return area;
}
