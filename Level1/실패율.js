// Solution 1
function solution1(N, stages) {
  const failureLates = [];
  let numberOfParticipants = stages.length;

  for (let stageNum = 1; stageNum <= N; stageNum++) {
    const numberOfFailure = stages.filter((stage) => stage === stageNum).length;
    const failureLate = numberOfFailure / numberOfParticipants;

    failureLates.push([stageNum, failureLate]);
    numberOfParticipants -= numberOfFailure;
  }

  failureLates.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  const sortedStages = failureLates.map((failureLate) => failureLate[0]);

  return sortedStages;
}

// Solution 2
function solution2(N, stages) {
  const stagesFailureLate = [];

  for (let stageNum = 1; stageNum <= N; stageNum++) {
    const numberOfFailure = stages.filter((stage) => stage === stageNum).length;
    const numberOfParticipants = stages.filter(
      (stage) => stage >= stageNum
    ).length;
    const failureLate = numberOfFailure / numberOfParticipants;

    stagesFailureLate.push([stageNum, failureLate]);
  }

  stagesFailureLate.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  const sortedStages = stagesFailureLate.map(
    (stageFailureLate) => stageFailureLate[0]
  );

  return sortedStages;
}
