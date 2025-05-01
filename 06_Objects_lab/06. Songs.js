function printSongs(data) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const songsCount = data.shift();
  const filterType = data.pop();
  let songsList = [];

  for (let i = 0; i < songsCount; i++) {
    const [typeList, name, time] = data[i].split("_");
    let song = new Song(typeList, name, time);
    songsList.push(song);
  }

  songsList
    .filter((song) => filterType === "all" || song.typeList === filterType)
    .forEach((song) => console.log(song.name));
}

printSongs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
