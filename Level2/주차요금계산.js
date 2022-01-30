// Solution 1
function getMinutes(time) {
  const splittedTime = time.split(':');
  const hours = parseInt(splittedTime[0]);
  const minute = parseInt(splittedTime[1]);

  return hours * 60 + minute;
}

function solution(fees, records) {
  const result = [];
  const [basicMinutes, basicFee, unitTime, unitFee] = fees;
  const totalTimeMap = new Map();
  const _records = records
    .map((record) => record.split(' '))
    .sort((a, b) => parseInt(a[1]) - parseInt(b[1]));

  function setTotalTimeMap(carNumber, minutes) {
    totalTimeMap.has(carNumber)
      ? totalTimeMap.set(carNumber, totalTimeMap.get(carNumber) + minutes)
      : totalTimeMap.set(carNumber, minutes);
  }

  for (let i = 0; i < _records.length; i += 2) {
    const [firstTime, firstCarNumber, firstAction] = _records[i];

    if (i === _records.length - 1) {
      const minutes = getMinutes('23:59') - getMinutes(firstTime);

      setTotalTimeMap(firstCarNumber, minutes);

      break;
    }

    const [secondTime, secondCarNumber, secondAction] = _records[i + 1];

    if (firstCarNumber === secondCarNumber) {
      const minutes = getMinutes(secondTime) - getMinutes(firstTime);

      setTotalTimeMap(firstCarNumber, minutes);
    } else if (firstCarNumber !== secondCarNumber) {
      const minutes = getMinutes('23:59') - getMinutes(firstTime);

      setTotalTimeMap(firstCarNumber, minutes);
      i--;
    }
  }

  for (const [carNumber, totalMinutes] of totalTimeMap) {
    const fee =
      totalMinutes <= basicMinutes
        ? basicFee
        : basicFee +
          Math.ceil((totalMinutes - basicMinutes) / unitTime) * unitFee;

    result.push(fee);
  }

  return result;
}
