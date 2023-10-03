function solution(myString) {
  return myString
    .split('x')
    .filter((alphabet) => alphabet !== '')
    .sort();
}
