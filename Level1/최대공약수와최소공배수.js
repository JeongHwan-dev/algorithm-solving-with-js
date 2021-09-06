function solution1(n, m) {
  let answer = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);

  for (let i = min; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      answer.push(i);
      break;
    }
  }

  while (true) {
    if (max % n === 0 && max % m === 0) {
      answer.push(max);
      break;
    } else {
      max++;
    }
  }

  return answer;
}

function solution2(n, m) {
  let answer = [];

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  answer.push(gcd(n, m));
  answer.push(lcm(n, m));

  return answer;
}
