// Solution 1
function solution1(s) {
  let result = true;
  const splittedS = s.split('');

  if (!(splittedS.length === 4 || splittedS.length === 6)) {
    result = false;
  }

  for (const element of splittedS) {
    if (isNaN(element)) {
      result = false;
    }
  }

  return result;
}

// Solution 2
function solution2(s) {
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }

  const splittedS = s.split('');

  for (const element of splittedS) {
    if (isNaN(element)) {
      return false;
    }
  }

  return true;
}
