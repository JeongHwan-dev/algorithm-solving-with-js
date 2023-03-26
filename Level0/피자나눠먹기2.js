// Solution 1
const NUMBER_OF_SLICES_ON_A_PIZZA = 6;

function solution(n) {
  let numberOfPizza = 1;

  while ((NUMBER_OF_SLICES_ON_A_PIZZA * numberOfPizza) % n != 0) {
    numberOfPizza += 1;
  }

  return numberOfPizza;
}
