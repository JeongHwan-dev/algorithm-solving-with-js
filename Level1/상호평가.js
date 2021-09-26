// Solution 1
// 이중 for 문으로 구현된 transpose() 함수를 사용한 솔루션
function transpose(matrix) {
  const transposedMatrix = [];
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(matrix[j][i]);
    }

    transposedMatrix.push(row);
  }

  return transposedMatrix;
}

function getGrade(avgScore) {
  let grade = '';

  if (avgScore >= 90) {
    grade = 'A';
  } else if (avgScore >= 80) {
    grade = 'B';
  } else if (avgScore >= 70) {
    grade = 'C';
  } else if (avgScore >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

function solution1(scores) {
  let result = '';
  const n = scores.length;
  const rotatedScores = transpose(scores);

  for (let i = 0; i < n; i++) {
    const maxScore = Math.max(...rotatedScores[i]);
    const minScore = Math.min(...rotatedScores[i]);
    const sumScore = rotatedScores[i].reduce((acc, score) => acc + score, 0);
    let avgScore;

    if (
      (scores[i][i] === maxScore &&
        rotatedScores[i].indexOf(maxScore) ===
          rotatedScores[i].lastIndexOf(maxScore)) ||
      (scores[i][i] === minScore &&
        rotatedScores[i].indexOf(minScore) ===
          rotatedScores[i].lastIndexOf(minScore))
    ) {
      avgScore = (sumScore - scores[i][i]) / (n - 1);
    } else {
      avgScore = sumScore / n;
    }

    const grade = getGrade(avgScore);

    result += grade;
  }

  return result;
}

// Solution 2
// reduce(), map() 메서드로 구현된 transpose() 함수를 사용한 솔루션
function transpose(matrix) {
  const transposedMatrix = matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

  return transposedMatrix;
}

function getGrade(avgScore) {
  let grade = '';

  if (avgScore >= 90) {
    grade = 'A';
  } else if (avgScore >= 80) {
    grade = 'B';
  } else if (avgScore >= 70) {
    grade = 'C';
  } else if (avgScore >= 50) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  return grade;
}

function solution2(scores) {
  let result = '';
  const n = scores.length;
  const rotatedScores = transpose(scores);

  for (let i = 0; i < n; i++) {
    const maxScore = Math.max(...rotatedScores[i]);
    const minScore = Math.min(...rotatedScores[i]);
    const sumScore = rotatedScores[i].reduce((acc, score) => acc + score, 0);
    let avgScore;

    if (
      (scores[i][i] === maxScore &&
        rotatedScores[i].indexOf(maxScore) ===
          rotatedScores[i].lastIndexOf(maxScore)) ||
      (scores[i][i] === minScore &&
        rotatedScores[i].indexOf(minScore) ===
          rotatedScores[i].lastIndexOf(minScore))
    ) {
      avgScore = (sumScore - scores[i][i]) / (n - 1);
    } else {
      avgScore = sumScore / n;
    }

    const grade = getGrade(avgScore);

    result += grade;
  }

  return result;
}
