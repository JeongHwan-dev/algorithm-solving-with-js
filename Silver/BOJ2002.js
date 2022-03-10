// Solution 1
function solution1(cars) {
  const inputCar = [];
  const outputCar = [];
  let overtakingCarCount = 0;

  cars.forEach((car) =>
    inputCar.includes(car) ? outputCar.push(car) : inputCar.push(car)
  );

  outputCar.forEach((car) => {
    if (inputCar[0] === car) {
      inputCar.shift();
    } else {
      inputCar.splice(inputCar.indexOf(car), 1);
      overtakingCarCount += 1;
    }
  });

  return overtakingCarCount;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const cars = input.slice(1);

console.log(solution1(cars));
