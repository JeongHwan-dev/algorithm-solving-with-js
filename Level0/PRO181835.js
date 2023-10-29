const isEvenNumber = (num) => num % 2 === 0;

const solution = (arr, k) => {
  return isEvenNumber(k) ? arr.map((num) => num + k) : arr.map((num) => num * k);
};
