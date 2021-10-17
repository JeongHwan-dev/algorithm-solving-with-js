// Solution 1
// grouping() 함수와 includes() 메서드를 활용한 솔루션

function grouping(array, n) {
  const newArray = [];

  for (let i = 0; i < array.length; i += n) {
    newArray.push(array.slice(i, i + n));
  }

  return newArray;
}

function solution(n, a, b) {
  let totalRound = 0;
  let tournament = Array.from({ length: n }, (v, i) => i + 1);

  while (n !== 1) {
    n = n / 2;
    totalRound++;
  }

  for (let round = 1; round < totalRound; round++) {
    tournament = grouping(tournament, 2);
    tournament = tournament.map((group) => group.flat());

    for (let i = 0; i < tournament.length; i++) {
      if (tournament[i].includes(a) && tournament[i].includes(b)) {
        return round;
      }
    }
  }

  return totalRound;
}

// Solution 2
// Math.ceil() 올림 메서드를 활용한 솔루션

function solution2(n, a, b) {
  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    round++;
  }

  console.log(Math.ceil(1, 2));

  return round;
}
