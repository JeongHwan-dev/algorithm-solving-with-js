function solution(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}
