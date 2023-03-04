// Solution 1
function solution(my_string) {
  const array = my_string.split(' ').map((element) => (isNaN(element) ? element : Number(element)));
  let sum = Number(array[0]);

  for (let i = 1; i < array.length - 1; i += 2) {
    const [operator, num] = [array[i], array[i + 1]];

    operator === '+' ? (sum += num) : (sum -= num);
  }

  return sum;
}
