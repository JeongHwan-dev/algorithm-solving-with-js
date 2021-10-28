function checkId(userId, bannedId) {
  if (userId.length !== bannedId.length) {
    return false;
  }

  const splittedUserId = userId.split('');
  const splittedBannedId = bannedId.split('');

  for (let i = 0; i < userId.length; i++) {
    if (splittedBannedId[i] === '*') {
      continue;
    }

    if (splittedUserId[i] !== splittedBannedId[i]) {
      return false;
    }
  }

  return true;
}

function getSuspectId(userId, bannedId) {
  const suspectId = bannedId.map((bId) =>
    userId.filter((uId) => checkId(uId, bId))
  );

  return suspectId;
}

function findCorrectCase(suspectId, time, cases, filling) {
  const currentCase = suspectId[time];

  if (filling.length === suspectId.length) {
    cases.push(filling);
    return;
  }

  if (!currentCase) {
    return;
  }

  currentCase.forEach((id) => {
    if (filling.includes(id)) {
      return;
    }

    const currentFilling = filling.slice();

    currentFilling.push(id);
    findCorrectCase(suspectId, time + 1, cases, currentFilling);
  });
}

function solution(userId, bannedId) {
  const suspectId = getSuspectId(userId, bannedId);
  const cases = [];

  findCorrectCase(suspectId, 0, cases, []);

  const temp = cases.map((arr) => arr.sort().join(''));
  const casesSet = new Set(temp);

  return casesSet.size;
}
