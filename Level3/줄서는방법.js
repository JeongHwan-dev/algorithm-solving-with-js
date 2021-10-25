function solution(n, k) {
  const orders = [];
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let fac = arr.reduce((acc, cur) => acc * cur, 1);

  k--;

  while (orders.length !== n) {
    fac = fac / arr.length;

    const temp = arr[Math.floor(k / fac)];

    orders.push(temp);
    k = k % fac;
    arr = arr.filter((num) => num !== temp);
  }

  return orders;
}
