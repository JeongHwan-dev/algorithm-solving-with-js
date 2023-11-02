// Solution 1
const solution = (emergency) =>
  emergency
    .map((value, index) => [value, index])
    .sort(([aValue, aIndex], [bValue, bIndex]) => bValue - aValue)
    .map((value, index) => [...value, index + 1])
    .sort(([aValue, aIndex, aOrder], [bValue, bIndex, bOrder]) => aIndex - bIndex)
    .map(([aValue, bValue, order]) => order);

// Solution 2
const solution2 = (emergency) => {
  const sortedEmergency = [...emergency].sort((a, b) => b - a);

  return emergency.map((value) => sortedEmergency.indexOf(value) + 1);
};
