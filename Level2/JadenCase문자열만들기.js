function solution(s) {
  const answer = s
    .split(' ')
    .map((word) => {
      return isNaN(word[0])
        ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        : word.toLowerCase();
    })
    .join(' ');

  return answer;
}
