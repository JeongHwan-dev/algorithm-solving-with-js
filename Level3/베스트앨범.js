function solution1(genres, plays) {
  const album = [];
  const map = new Map();
  const info = genres.map((value, index) => [value, plays[index], index]);
  const genresRank = [];

  info
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[2] - b[2];
      } else {
        return b[1] - a[1];
      }
    })
    .forEach((song) => {
      const [genre, play] = song;

      if (map.has(genre)) {
        map.set(genre, map.get(genre) + play);
      } else {
        map.set(genre, play);
      }
    });

  for (const [key, value] of Array.from(map)) {
    genresRank.push([key, value]);
  }

  genresRank
    .sort((a, b) => b[1] - a[1])
    .map((value) => value[0])
    .forEach((genre) => {
      const filteredInfo = info
        .filter((item) => item[0] === genre)
        .map(([, , index]) => index);

      if (filteredInfo.length >= 2) {
        for (let i = 0; i < 2; i++) {
          album.push(filteredInfo.shift());
        }
      } else {
        album.push(filteredInfo.shift());
      }
    });

  return album;
}

function solution2(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };

      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  const order = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);

  return order;
}
