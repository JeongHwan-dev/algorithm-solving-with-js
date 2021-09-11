function sum(arr) {
  return arr.reduce((prev, next) => prev + next, 0);
}

function solution(bridge_length, weight, truck_weights) {
  let sec = 0;
  let bridge = new Array(bridge_length).fill(0);

  while (queue.length) {
    sec++;
    bridge.shift();

    if (truck_weights.length > 0) {
      if (sum(bridge) + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        queue.push(0);
      }
    }
  }

  return sec;
}
