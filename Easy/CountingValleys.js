// Solution 1
function countingValleys(steps, path) {
  let valleyCount = 0;
  let currentLevel = 0;
  let levels = [0];
  let prevLevel = levels[0];

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      currentLevel++;
      levels.push(currentLevel);
    } else if (path[i] === 'D') {
      currentLevel--;
      levels.push(currentLevel);
    }
  }

  for (let i = 1; i < levels.length; i++) {
    if (prevLevel < 0 && levels[i] >= 0) {
      valleyCount++;
    }

    prevLevel = levels[i];
  }

  return valleyCount;
}

// Solution 2
function countingValleys(steps, path) {
  let valleyCount = 0;
  let currentLevel = 0;
  let prevLevel = 0;

  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      currentLevel++;

      if (prevLevel < 0 && currentLevel >= 0) {
        valleyCount++;
      }
    } else if (path[i] === 'D') {
      currentLevel--;
    }

    prevLevel = currentLevel;
  }

  return valleyCount;
}
