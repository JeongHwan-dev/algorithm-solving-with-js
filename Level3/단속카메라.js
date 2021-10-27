function solution(routes) {
  const _routes = routes.slice();
  const sortedRoutes = _routes.sort((a, b) => a[0] - b[0]);
  let cameraCount = 1;
  let curOut = sortedRoutes[0][1];

  for (let i = 1; i < sortedRoutes.length; i++) {
    const [newIn, newOut] = sortedRoutes[i];

    if (curOut < newIn) {
      cameraCount++;
      curOut = newOut;
    }

    if (curOut > newOut) {
      curOut = newOut;
    }
  }

  return cameraCount;
}
