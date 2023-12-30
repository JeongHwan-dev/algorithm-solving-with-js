// Solution 1
function solution(my_string, queries) {
  return queries
    .reduce(
      (arrayOfString, [startIndex, endIndex]) => {
        const partOfArray = arrayOfString.slice(startIndex, endIndex + 1);

        arrayOfString.splice(startIndex, partOfArray.length, ...partOfArray.reverse());

        return arrayOfString;
      },
      [...my_string]
    )
    .join('');
}
