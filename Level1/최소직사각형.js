// Solution 1
// 1. forEach() 메서드를 사용해 sizes 안의 size 배열을 내림차순으로 정렬
// 2. map() 메서드를 사용해 size 배열의 첫 번째 요소는 widthSizes 배열에 넣기
// 3. map() 메서드를 사용해 size 배열의 두 번째 요소는 heightSizes 배열에 넣기
// 4. Math.max() 메서드를 사용해 widthSizes, heightSizes 각각의 배열의 최대값 구하기
// 5. 가로 최대값 x 세로 최대값을 통해 최소 면적 도출
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
// 1. forEach() 메서드를 사용해 sizes 안의 size 배열을 내림차순으로 정렬
// 2. widthSizes, heightSizes 각각의 배열을 빈 배열로 초기화
// 3. map() 메서드를 사용해 size 배열의 두 번째 요소는 heightSizes 배열에 넣기
// 4. Math.max() 메서드를 사용해 widthSizes, heightSizes 각각의 배열의 최대값 구하기
// 5. 가로 최대값 x 세로 최대값을 통해 최소 면적 도출
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
// 1. forEach() 메서드를 사용해 sizes 안의 size 배열을 내림차순으로 정렬
// 2. Math.max() 메서드, map() 메서드를 사용해 가로 최대값, 세로 최대값 구하기
// 3. 가로 최대값 x 세로 최대값을 통해 최소 면적 도출
function solution3(sizes) {
  sizes.forEach((size) => size.sort((a, b) => b - a));

  const maxWidth = Math.max(...sizes.map((size) => size[0]));
  const maxHeight = Math.max(...sizes.map((size) => size[1]));
  const area = maxWidth * maxHeight;

  return area;
}
