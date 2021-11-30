// Solution 1
function solution1(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const idx = commands[i][2] - 1;

    const temp = array.slice(start, end);

    temp.sort((a, b) => a - b);

    result.push(temp[idx]);
  }

  return result;
}

// Solution 2
function solution2(array, commands) {
  const result = commands.map((command) => {
    const start = command[0] - 1;
    const end = command[1];
    const idx = command[2] - 1;
    const tmp = array.slice(start, end).sort((a, b) => a - b);

    return tmp[idx];
  });

  return result;
}

// Solution 3
function solution3(array, commands) {
  const result = commands.map((command) => {
    const [start, end, order] = command;
    const temp = array.slice(start - 1, end).sort((a, b) => a - b);

    return temp[order - 1];
  });

  return result;
}
