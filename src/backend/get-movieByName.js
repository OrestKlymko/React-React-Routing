export default async function getMovieByName(movieName) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bb3040328fa0d2aed69fdb15778b661d&query=${movieName}&language=en-US`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
