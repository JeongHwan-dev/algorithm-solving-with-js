// Solution 1
function solution1(id_pw, db) {
  const [id, password] = id_pw;

  for (let i = 0; i < db.length; i++) {
    const [idInDb, passwordInDb] = db[i];

    if (idInDb === id) {
      if (passwordInDb === password) {
        return 'login';
      }

      return 'wrong pw';
    }
  }

  return 'fail';
}

// Solution 2
function solution2(id_pw, db) {
  const [id, password] = id_pw;

  const dbMap = new Map(db);

  return dbMap.has(id) ? (dbMap.get(id) === password ? 'login' : 'wrong pw') : 'fail';
}
