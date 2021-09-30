function solution(people, limit) {
  let minBoatCount = 0;
  let sP = 0;
  let eP = people.length - 1;

  people.sort((a, b) => b - a);

  while (sP < eP) {
    const sum = people[sP] + people[eP];

    if (sum > limit) {
      sP++;
    } else {
      sP++;
      eP--;
    }

    minBoatCount++;
  }

  if (sP === eP) {
    minBoatCount++;
  }

  return minBoatCount;
}
