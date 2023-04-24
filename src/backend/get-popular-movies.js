const URL = `https://api.themoviedb.org/3/movie/popular?api_key=bb3040328fa0d2aed69fdb15778b661d`;

function getPopularMovie() {
  return fetch(URL)
    .then(r => r.json())
    .then(data => data.results)
    .catch(e => console.log(e));
}

export default getPopularMovie;
