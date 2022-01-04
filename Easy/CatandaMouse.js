function catAndMouse(x, y, z) {
  const xDistance = Math.abs(x - z);
  const yDistance = Math.abs(y - z);
  let result = '';

  if (xDistance < yDistance) {
    result = 'Cat A';
  } else if (xDistance > yDistance) {
    result = 'Cat B';
  } else {
    result = 'Mouse C';
  }

  return result;
}
