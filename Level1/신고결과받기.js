// Solution 1
function solution(id_list, report, k) {
  const reports = [...new Set(report)].slice().map((value) => value.split(' '));
  const reportMap = new Map();
  const emailCountListMap = new Map();
  const emailCountList = [];
  const blacklist = [];

  for (const [reporter, reportedUser] of reports) {
    reportMap.has(reportedUser)
      ? reportMap.set(reportedUser, reportMap.get(reportedUser) + 1)
      : reportMap.set(reportedUser, 1);
  }

  for (const [userName, reportCount] of reportMap) {
    if (reportCount >= k) {
      blacklist.push(userName);
    }
  }

  for (const userName of id_list) {
    emailCountListMap.set(userName, 0);
  }

  for (const [reporter, reportedUser] of reports) {
    if (blacklist.includes(reportedUser)) {
      emailCountListMap.set(reporter, emailCountListMap.get(reporter) + 1);
    }
  }

  for (const [reporter, emailCount] of emailCountListMap) {
    emailCountList.push(emailCount);
  }

  return emailCountList;
}
