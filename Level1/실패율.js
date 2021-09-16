function solution(N, stages) {
  let answer;
  // 실패율들을 담을 배열
  let failLates = [];
  // 남은 전체 플레이어 수
  let playerN = stages.length;

  // 반복문을 통해 전체 스테이지 돌기
  for (let i = 1; i <= N; i++) {
    // 각 스테이지별 실패한 플레이어 수 체크
    let failN = stages.filter((value) => value === i).length;
    // 실패율 계산
    let failLate = failN / playerN;

    // [현재 스테이지, 현재 스테이지의 실패율] 배열을 실패율들을 담는 배열에 넣기
    failLates.push([i, failLate]);
    // 남은 플레이어 수를 실패한 플레이어 수만큼 감소
    playerN -= failN;
  }

  // 실패율 배열을 실패율 기준으로 내림차순으로 정렬하고
  // 만약 값이 동일하다면 스테이지를 기준으로 오름차순으로 정렬
  failLates.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]));

  // 정렬된 실패율 배열에서 스테이지 값만 추출해서 새 배열로 생성
  answer = failLates.map((failLate) => failLate[0]);

  return answer;
}

let N = 5;
let stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
