// Solution 1
function solution1(cacheSize, cities) {
  const MISS_RUNTIME = 5;
  const HIT_RUNTIME = 1;
  const _cities = cities.map((city) => city.toLowerCase());
  const cache = [];
  let totalRuntime = 0;

  if (cacheSize === 0) {
    return cities.length * MISS_RUNTIME;
  }

  for (const city of _cities) {
    if (cache.includes(city)) {
      const index = cache.indexOf(city);

      cache.splice(index, 1);
      cache.push(city);
      totalRuntime += HIT_RUNTIME;
    } else {
      if (cache.length < cacheSize) {
        cache.push(city);
      } else {
        cache.shift();
        cache.push(city);
      }

      totalRuntime += MISS_RUNTIME;
    }
  }

  return totalRuntime;
}

// Solution 2
function solution2(cacheSize, cities) {
  const MISS_RUNTIME = 5;
  const HIT_RUNTIME = 1;
  const cache = [];
  let totalRuntime = 0;

  if (cacheSize === 0) {
    return cities.length * MISS_RUNTIME;
  }

  cities.forEach((city) => {
    city = city.toUpperCase();

    const index = cache.indexOf(city);

    if (index > -1) {
      cache.splice(index, 1);
      totalRuntime += HIT_RUNTIME;
    } else {
      if (cache.length >= cacheSize) {
        cache.shift();
      }

      totalRuntime += MISS_RUNTIME;
    }

    cache.push(city);
  });

  return totalRuntime;
}
