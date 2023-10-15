// Solution 1
function solution1(my_string) {
  let sum = 0;

  for (let i = 0; i < my_string.length; i++) {
    if (isNaN(my_string[i])) {
      console.log(my_string[i]);

      continue;
    }

    let num = Number(my_string[i]);

    i += 1;

    while (!isNaN(my_string[i])) {
      num = num * 10 + Number(my_string[i]);
      i += 1;
    }

    sum += num;
  }

  return sum;
}

// Solution 2
function solution2(my_string) {
  return my_string.split(/D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
