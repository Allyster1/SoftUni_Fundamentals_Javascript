function storeMovies(arrayData) {
  let movieList = {};

  for (let i = 0; i < arrayData.length; i++) {
    const line = arrayData[i];

    if (line.includes("addMovie")) {
      const movieName = line.replace("addMovie ", "");

      if (!movieList[movieName]) {
        movieList[movieName] = {
          name: movieName,
          director: null,
          date: null,
        };
      }
    } else if (line.includes("directedBy")) {
      const [movieName, director] = line.split(" directedBy ");
      if (movieList[movieName]) {
        movieList[movieName].director = director;
      }
    } else if (line.includes("onDate")) {
      const [movieName, date] = line.split(" onDate ");
      if (movieList[movieName]) {
        movieList[movieName].date = date;
      }
    }
  }

  const movies = Object.values(movieList).filter(
    (movie) => movie.name && movie.director && movie.date
  );

  movies.forEach((movie) => console.log(JSON.stringify(movie)));
}

storeMovies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
