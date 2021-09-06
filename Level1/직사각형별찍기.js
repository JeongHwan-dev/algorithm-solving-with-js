process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  let answer = '';

  for (let r = 0; r < b; r++) {
    let tmp = '';

    for (let c = 0; c < a; c++) {
      tmp += '*';
    }

    answer += tmp + '\n';
  }

  console.log(answer);
});
