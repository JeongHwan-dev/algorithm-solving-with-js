// Solution 1
function viralAdvertising(n) {
  let shared = 5;
  let liked = 0;
  let camulative = 0;

  for (let i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    camulative += liked;
    shared = liked * 3;
  }

  return camulative;
}
