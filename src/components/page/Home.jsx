import getPopularMovie from 'backend/get-popular-movies';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const [listFilm, setListFilm] = useState([]);
  getPopularMovie().then(setListFilm);
  const location = useLocation();

  return (
    <>
      <h1>Trending Todays</h1>
      <ul>
        {listFilm.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
