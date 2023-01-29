// Solution 1
const VOWEL_LIST = ['a', 'e', 'i', 'o', 'u'];

function solution1(my_string) {
  return my_string
    .split('')
    .filter((alphabet) => !VOWEL_LIST.includes(alphabet))
    .join('');
}

// Solution 2
function solution2(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}
