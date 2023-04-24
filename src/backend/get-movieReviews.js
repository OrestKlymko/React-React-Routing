export default async function getMoviesReviews(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=bb3040328fa0d2aed69fdb15778b661d`
  )
    .then(r => r.json())
    .catch(e => console.log(e));
}
