function solution(numbers, target) {
  let answer = 0;
  const n = numbers.length;

  // 깊이 우선 탐색 이용
  function DFS(i, sum) {
    if (i === n) {
      // 만약 합계가 타겟 넘버와 같다면 answer에 +1
      if (sum === target) {
        answer++;
      }
      return;
    } else {
      // 현재 값을 더하는 경우
      DFS(i + 1, sum + numbers[i]);
      // 현재 값을 빼는 경우
      DFS(i + 1, sum - numbers[i]);
    }
  }

  DFS(0, 0);

  return answer;
}
