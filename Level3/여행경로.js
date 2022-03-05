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

// Solution 2
function solution2(tickets) {
  const totalTicketCount = tickets.length;
  const visited = Array.from({ length: totalTicketCount }, () => false);
  const route = [];
  const finalRoutes = [];

  tickets.sort();

  function dfs(airport, ticketCount) {
    if (ticketCount === totalTicketCount) {
      finalRoutes.push(route.slice());
    } else {
      for (let i = 0; i < totalTicketCount; i++) {
        const [departureAirport, arrivalAirport] = tickets[i];

        if (!visited[i] && departureAirport === airport) {
          visited[i] = true;
          route.push(arrivalAirport);
          dfs(arrivalAirport, ticketCount + 1);
          visited[i] = false;
          route.pop();
        }
      }
    }
  }

  route.push('ICN');
  dfs('ICN', 0);

  return finalRoutes[0];
}
