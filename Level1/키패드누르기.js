function calcDistance(numberPos, currentPos) {
  const distance =
    Math.abs(numberPos[0] - currentPos[0]) +
    Math.abs(numberPos[1] - currentPos[1]);

  return distance;
}

function solution(numbers, hand) {
  const result = [];
  const keypad = [
    [3, 6, 9, '#'],
    [2, 5, 8, 0],
    [1, 4, 7, '*'],
  ];
  let rightPos = [0, 3];
  let leftPos = [2, 3];

  function move(side, numberPos) {
    if (side == 'L') {
      leftPos = numberPos;
    } else {
      rightPos = numberPos;
    }

    result.push(side);
  }

  for (const number of numbers) {
    let numberPos = [0, 0];

    for (let x = 0; x < keypad.length; x++) {
      for (let y = 0; y < keypad[0].length; y++) {
        if (keypad[x][y] === number) {
          numberPos = [x, y];
          break;
        }
      }
    }

    if (numberPos[0] === 0) {
      move('R', numberPos);
    } else if (numberPos[0] === 2) {
      move('L', numberPos);
    } else {
      const rightDistance = calcDistance(numberPos, rightPos);
      const leftDistance = calcDistance(numberPos, leftPos);

      if (leftDistance < rightDistance) {
        move('L', numberPos);
      } else if (leftDistance > rightDistance) {
        move('R', numberPos);
      } else {
        if (hand === 'left') {
          move('L', numberPos);
        } else {
          move('R', numberPos);
        }
      }
    }
  }

  return result.join('');
}
