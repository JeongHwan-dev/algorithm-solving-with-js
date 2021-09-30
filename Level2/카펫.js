function solution(brown, yellow) {
  const sizes = [];
  const area = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    if (area % height === 0) {
      const width = area / height;

      if ((width - 2) * (height - 2) === yellow) {
        sizes.push(...[width, height]);
        break;
      }
    }
  }

  return sizes;
}
