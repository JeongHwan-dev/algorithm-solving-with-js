// Solution 1
function solution(s) {
  const numList = s.split(' ');

  return numList.reduce(
    (acc, cur, index) => (cur === 'Z' ? acc - numList[index - 1] : acc + Number(cur)),
    0
  );
}
