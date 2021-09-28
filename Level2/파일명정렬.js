function solution(files) {
  const filesTable = files.map((file) => {
    const temp = file.split('');
    let numberStartIndex;
    let tailStartIndex = -1;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== ' ' && !isNaN(temp[i])) {
        numberStartIndex = i;
        break;
      }
    }

    for (let j = numberStartIndex + 1; j < temp.length; j++) {
      if (temp[j] === ' ' || isNaN(temp[j])) {
        tailStartIndex = j;
        break;
      }
    }

    const head = file.substring(0, numberStartIndex);
    const number =
      tailStartIndex === -1
        ? file.substring(numberStartIndex)
        : file.substring(numberStartIndex, tailStartIndex);
    const tail = tailStartIndex === -1 ? '' : file.substring(tailStartIndex);

    return [head, number, tail];
  });

  filesTable.sort(
    (a, b) =>
      (a[0].toLowerCase() > b[0].toLowerCase()) -
        (a[0].toLowerCase() < b[0].toLowerCase()) || Number(a[1]) - Number(b[1])
  );

  const sortedFiles = filesTable.map((file) => file.join(''));

  return sortedFiles;
}
