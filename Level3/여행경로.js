// Solution 1
function solution1(tickets) {
  let finalRoute = [];
  const route = [];
  const ticketCount = tickets.length;
  const visited = Array.from({ length: ticketCount }, () => false);

  tickets.sort();

  function dfs(airport, count) {
    route.push(airport);

    if (count === ticketCount) {
      finalRoute = route;
      return true;
    }

    for (let i = 0; i < ticketCount; i++) {
      if (!visited[i] && tickets[i][0] === airport) {
        visited[i] = true;

        if (dfs(tickets[i][1], count + 1)) {
          return true;
        }

        visited[i] = false;
      }
    }

    route.pop();

    return false;
  }

  dfs('ICN', 0);

  return finalRoute;
}
