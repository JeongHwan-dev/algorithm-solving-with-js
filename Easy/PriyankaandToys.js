// Solution 1
function toys(w) {
  const _w = w.slice();
  const containers = [];

  _w.sort((a, b) => a - b);

  for (const num of _w) {
    if (!containers[containers.length - 1]) {
      containers.push([num]);
      continue;
    }

    if (
      num >= containers[containers.length - 1][0] &&
      num <= containers[containers.length - 1][0] + 4
    ) {
      containers[containers.length - 1].push(num);
    } else {
      containers.push([num]);
    }
  }

  return containers.length;
}

// Solution 2
function toys(w) {
  const _w = w.slice();

  _w.sort((a, b) => a - b);

  const containers = [[_w[0]]];

  for (let i = 1; i < _w.length; i++) {
    if (
      _w[i] >= containers[containers.length - 1][0] &&
      _w[i] <= containers[containers.length - 1][0] + 4
    ) {
      containers[containers.length - 1].push(_w[i]);
    } else {
      containers.push([_w[i]]);
    }
  }

  return containers.length;
}
