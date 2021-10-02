// Solution 1
// forEach() 메서드를 활용한 솔루션

function solution1(skill, skillTrees) {
  let count = 0;

  skillTrees.forEach((skillTree) => {
    let flag = true;
    const splittedSkill = skill.split('');

    for (const element of skillTree) {
      if (splittedSkill.includes(element)) {
        if (element === splittedSkill[0]) {
          splittedSkill.shift();
        } else {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      count++;
    }
  });

  return count;
}

// Solution 2
// filter() 메서드를 활용한 솔루션

function solution2(skill, skillTrees) {
  function isCorrect(skillTree) {
    const splittedSkill = skill.split('');

    for (const element of skillTree) {
      if (!splittedSkill.includes(element)) {
        continue;
      }

      if (element === splittedSkill.shift()) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  const count = skillTrees.filter(isCorrect).length;

  return count;
}
