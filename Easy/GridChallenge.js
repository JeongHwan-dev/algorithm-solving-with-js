// Solution 1
function gridChallenge(grid) {
  const columnArray = Array.from({ length: grid[0].length }, () => []);

  for (const item of grid) {
    const splittedItem = item.split('').sort();

    splittedItem.forEach((alphabet, index) => {
      columnArray[index].push(alphabet);
    });
  }

  for (const column of columnArray) {
    const sortedColumn = column.slice().sort();

    if (column.join('') !== sortedColumn.join('')) {
      return 'NO';
    }
  }

  return 'YES';
}
