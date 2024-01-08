// Solution 1
function solution(arr, query) {
  const arrAfterQuery = arr.slice();

  query.forEach((num, index) => {
    const isEvenNumberIndex = index % 2 === 0;
    const startIndex = isEvenNumberIndex ? num + 1 : 0;
    const deleteCount = isEvenNumberIndex ? arrAfterQuery.length - num : num;

    arrAfterQuery.splice(startIndex, deleteCount);
  });

  return arrAfterQuery;
}

solution([0, 1, 2, 3, 4, 5], [4, 1, 2]);
