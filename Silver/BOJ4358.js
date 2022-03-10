// Solution 1
function solution1(trees) {
  const treeMap = new Map();
  const treePercentages = [];
  const treeNames = [];
  let totalTreeCount = 0;

  for (const tree of trees) {
    treeMap.has(tree)
      ? treeMap.set(tree, treeMap.get(tree) + 1)
      : treeMap.set(tree, 1);
  }

  for (const [tree, count] of treeMap) {
    treeNames.push(tree);
    totalTreeCount += count;
  }

  treeNames.sort();

  for (const tree of treeNames) {
    const percentage = ((treeMap.get(tree) / totalTreeCount) * 100).toFixed(4);

    treePercentages.push([tree, percentage]);
  }

  const results = treePercentages
    .map((treePercentage) => treePercentage.join(' '))
    .join('\n');

  return results;
}

// Solution 2
function solution2(trees) {
  const treeDictionary = {};
  let totalTreeCount = 0;

  trees.map((treeName) => {
    treeDictionary[treeName]
      ? (treeDictionary[treeName] += 1)
      : (treeDictionary[treeName] = 1);

    totalTreeCount += 1;
  });

  const treePercentages = Object.keys(treeDictionary)
    .sort()
    .map(
      (treeName) =>
        `${treeName} ${(
          (treeDictionary[treeName] / totalTreeCount) *
          100
        ).toFixed(4)}`
    )
    .join('\n');

  return treePercentages;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const trees = input.split('\n');

console.log(solution1(trees));

console.log(solution2(trees));
