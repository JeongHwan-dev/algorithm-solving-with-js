function checkEng(str) {
  const regExp = /[a-zA-Z]/;

  return regExp.test(str);
}

function tokenize(str) {
  const tokenMap = new Map();
  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    if (checkEng(str[i]) && checkEng(str[i + 1])) {
      count++;

      const token = [str[i], str[i + 1]].join('');

      tokenMap.has(token)
        ? tokenMap.set(token, tokenMap.get(token) + 1)
        : tokenMap.set(token, 1);
    }
  }

  return [tokenMap, count];
}

function solution(str1, str2) {
  const [str1Map, count1] = tokenize(str1.toLowerCase());
  const [str2Map, count2] = tokenize(str2.toLowerCase());

  if (str1Map.size === 0 && str2Map.size === 0) {
    return 65536;
  }

  if (str1Map.size === 0 || str2Map.size === 0) {
    return 0;
  }

  let intersectionElementCount = 0;

  str1Map.forEach((value, key) => {
    if (str2Map.has(key)) {
      intersectionElementCount += Math.min(value, str2Map.get(key));
    }
  });

  const similarity = parseInt(
    (intersectionElementCount / (count1 + count2 - intersectionElementCount)) *
      65536
  );

  return similarity;
}
