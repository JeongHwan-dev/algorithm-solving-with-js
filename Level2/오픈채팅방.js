// Solution 1
// 일반 객체를 활용한 솔루션

function solution1(record) {
  const result = [];
  const splittedRecord = record.map((log) => log.split(' '));
  const users = {};

  splittedRecord.forEach((log) => {
    const [action, id, nickName] = log;

    if (action === 'Enter' || action === 'Change') {
      users[id] = nickName;
    }
  });

  splittedRecord.forEach((log) => {
    const [action, id] = log;

    if (action === 'Enter') {
      result.push(`${users[id]}님이 들어왔습니다.`);
    } else if (action === 'Leave') {
      result.push(`${users[id]}님이 나갔습니다.`);
    }
  });

  return result;
}

// Solution 2
// Map 객체를 활용한 솔루션

function solution2(record) {
  const result = [];
  const splittedRecord = record.map((log) => log.split(' '));
  const users = new Map();

  splittedRecord.forEach((log) => {
    const [action, id, nickName] = log;

    if (action === 'Enter' || action === 'Change') {
      users.set(id, nickName);
    }
  });

  splittedRecord.forEach((log) => {
    const [action, id] = log;

    if (action === 'Enter') {
      result.push(`${users.get(id)}님이 들어왔습니다.`);
    } else if (action === 'Leave') {
      result.push(`${users.get(id)}님이 나갔습니다.`);
    }
  });

  return result;
}
