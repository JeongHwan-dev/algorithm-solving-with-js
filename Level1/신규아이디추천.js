// Solution 1
function level1(id) {
  const convertedID = id.toLowerCase();

  return convertedID;
}

function level2(id) {
  const convertedID = id
    .split('')
    .filter(
      (c) =>
        (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) ||
        (c.charCodeAt() >= 97 && c.charCodeAt() <= 122) ||
        !isNaN(c) ||
        c === '-' ||
        c === '_' ||
        c === '.'
    )
    .join('');

  return convertedID;
}

function level3(id) {
  let convertedID = '';
  const idArray = id.split('');

  for (let i = 0; i < idArray.length - 1; i++) {
    if (idArray[i] === '.' && idArray[i + 1] === '.') {
      idArray.splice(i, 1);
      i--;
    }
  }

  convertedID = idArray.join('');

  return convertedID;
}

function level4(id) {
  let convertedID = '';
  const idArray = id.split('');

  if (idArray[0] === '.') {
    idArray.shift();
  }

  if (idArray[idArray.length - 1] === '.') {
    idArray.pop();
  }

  convertedID = idArray.join('');

  return convertedID;
}

function level5(id) {
  const convertedID = id === '' ? 'a' : id;

  return convertedID;
}

function level6(id) {
  if (id.length >= 16) {
    let convertedID = '';
    const idArray = id.split('');
    const splicedID = idArray.splice(0, 15);

    if (splicedID[splicedID.length - 1] === '.') {
      splicedID.pop();
    }

    convertedID = splicedID.join('');

    return convertedID;
  } else {
    return id;
  }
}

function level7(id) {
  if (id.length <= 2) {
    const convertedID = id.padEnd(3, id.charAt(id.length - 1));

    return convertedID;
  } else {
    return id;
  }
}

function solution1(newID) {
  let recommendationID = '';

  recommendationID = level7(
    level6(level5(level4(level3(level2(level1(newID))))))
  );

  return recommendationID;
}

// Solution 2
function solution2(newID) {
  const recommendationID = newID
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  return recommendationID.length > 2
    ? recommendationID
    : recommendationID.padEnd(3, recommendationID[recommendationID.length - 1]);
}
