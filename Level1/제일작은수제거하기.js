function solution(arr) {
  let answer = [];
  let minIdx = 0;
  let min = arr[minIdx];

  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIdx = i;
      }
    }

    arr.splice(minIdx, 1);
    answer = arr;
  } else {
    answer.push(-1);
  }

  return answer;
}

let arr = [10];
console.log(solution(arr));
