function distancingByPerson(place, x, y) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      if (place[nx][ny] === 'P') {
        return false;
      }
    }
  }

  return true;
}

function distancingByEmpty(place, x, y) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let count = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      if (place[nx][ny] === 'P') {
        count++;
      }
    }

    if (count >= 2) {
      return false;
    }
  }

  return true;
}

function checkDistancing(place) {
  const N = 5;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (
        (place[x][y] === 'P' && !distancingByPerson(place, x, y)) ||
        (place[x][y] === 'O' && !distancingByEmpty(place, x, y))
      ) {
        return false;
      }
    }
  }

  return true;
}

function solution(places) {
  const _places = places.map((place) => place.map((row) => row.split('')));
  const check = _places.map((place) => (checkDistancing(place) ? 1 : 0));

  return check;
}
