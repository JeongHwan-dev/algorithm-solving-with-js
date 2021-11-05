function solution(operations) {
  const _operations = operations.map((operation) => operation.split(' '));
  const queue = [];

  _operations.forEach(([order, num]) => {
    if (queue.length > 0 && order === 'D') {
      if (num === '1') {
        const maxNum = Math.max(...queue);
        const maxNumIdx = queue.indexOf(maxNum);

        queue.splice(maxNumIdx, 1);
      } else if (num === '-1') {
        const minNum = Math.min(...queue);
        const minNumIdx = queue.indexOf(minNum);

        queue.splice(minNumIdx, 1);
      }
    } else if (order === 'I') {
      queue.push(parseInt(num));
    }
  });

  const maxAndMin =
    queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0, 0];

  return maxAndMin;
}

console.log(
  solution([
    'I -45',
    'I 653',
    'D 1',
    'I -642',
    'I 45',
    'I 97',
    'D 1',
    'D -1',
    'I 333',
  ])
);
