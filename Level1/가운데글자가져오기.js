function solution(s) {
  const halfIdx = Math.floor(s.length / 2);
  const answer =
    s.length % 2 === 0 ? s.substr(halfIdx - 1, 2) : s.substr(halfIdx, 1);

  return answer;
}
