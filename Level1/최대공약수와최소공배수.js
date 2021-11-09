// Solution 1
function solution1(n, m) {
  const result = [];
  const min = Math.min(n, m);
  let max = Math.max(n, m);

  for (let i = min; i > 0; i--) {
    if (n % i === 0 && m % i === 0) {
      result.push(i);
      break;
    }
  }

  while (true) {
    if (max % n === 0 && max % m === 0) {
      result.push(max);
      break;
    } else {
      max++;
    }
  }

  return result;
}

// Solution 2
function solution2(n, m) {
  const result = [];

  const getGCD = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return getGCD(b, a % b);
    }
  };

  const getLCM = (a, b) => (a * b) / getGCD(a, b);

  result.push(getGCD(n, m));
  result.push(getLCM(n, m));

  return result;
}

// Solution 3
function getGCD(num1, num2) {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
}

function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

function solution3(n, m) {
  const result = [];

  result.push(getGCD(n, m));
  result.push(getLCM(n, m));

  return result;
}
