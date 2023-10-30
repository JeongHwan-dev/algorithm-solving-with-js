// Solution 1
const solution = (todo_list, finished) => todo_list.filter((_, index) => !finished[index]);
