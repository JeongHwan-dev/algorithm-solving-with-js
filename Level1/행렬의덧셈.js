function solution(arr1, arr2) {
  let answer = [];

  for (let r = 0; r < arr1.length; r++) {
    let tmp = [];

    for (let c = 0; c < arr1[0].length; c++) {
      tmp.push(arr1[r][c] + arr2[r][c]);
    }

    answer.push(tmp);
  }

  return answer;
}
