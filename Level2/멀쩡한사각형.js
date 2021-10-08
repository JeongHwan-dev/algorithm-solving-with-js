function GCD(n1, n2) {
  const mod = n1 % n2;

  if (mod === 0) {
    return n2;
  }

  return GCD(n2, mod);
}

function solution(w, h) {
  const totalSquareCount = w * h;
  const damagedSquareCount = w + h - GCD(w, h);
  const usableSquareCount = totalSquareCount - damagedSquareCount;

  return usableSquareCount;
}
