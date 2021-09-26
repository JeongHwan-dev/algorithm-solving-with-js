function solution(table, languages, preference) {
  const tableMatrix = table.map((row) => row.split(' '));
  const job = tableMatrix.map((row) => [row[0]]);
  const languageTable = tableMatrix.map((row) => row.slice(1));
  const n = languageTable.length;
  let index = 0;
  let recommendation = '';

  for (const row of languageTable) {
    let totalScore = 0;

    for (let i = 0; i < languages.length; i++) {
      const score =
        row.indexOf(languages[i]) !== -1
          ? (n - row.indexOf(languages[i])) * preference[i]
          : 0;

      totalScore += score;
    }

    job[index++].push(totalScore);
  }

  job.sort((a, b) =>
    b[1] === a[1] ? (a[0] > b[0]) - (a[0] < b[0]) : b[1] - a[1]
  );

  recommendation = job[0][0];

  return recommendation;
}
