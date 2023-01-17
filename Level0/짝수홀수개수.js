// Solution 1
function solution1(num_list) {
  const countList = [0, 0];

  num_list.forEach((num) => {
    num % 2 === 0 ? (countList[0] = ++countList[0]) : (countList[1] = ++countList[1]);
  });

  return countList;
}

// Solution 2
function solution2(num_list) {
  return num_list.reduce(
    (acc, cur) => (cur % 2 === 0 ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + 1]),
    [0, 0]
  );
}

// Solution 3
function solution3(num_list) {
  const evenNumCount = num_list.filter((num) => num % 2 === 0).length;

  return [evenNumCount, num_list.length - evenNumCount];
}
