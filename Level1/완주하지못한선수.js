// Solution 1
function solution1(participant, completion) {
  let failure = '';
  const map = new Map();

  for (const name of participant) {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  for (const name of completion) {
    map.set(name, map.get(name) - 1);
  }

  for (const name of participant) {
    if (map.get(name) > 0) {
      failure = name;
      break;
    }
  }

  return failure;
}

// Solution 2
function solution2(participant, completion) {
  let failure = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      failure = participant[i];
      break;
    }
  }

  return failure;
}
