import getMovieByID from 'backend/get-movieById';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import css from '../../css/movieDetails.module.css';

export default function MovieDetail() {
  const location = useLocation();
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  const backLinkHref = location.state?.from ?? `/movies`;

  useEffect(() => {
    getMovieByID(movieId).then(setMovie);
  }, [movieId]);
  // eslint-disable-next-line
  const { poster_path, overview, original_title, vote_average, genres } = movie;
  return (
    <div className={css.container}>
      <Link className={css.backBtn} to={backLinkHref}>
        Go to back
      </Link>
      <div className={css.wrapper}>
        <img
          style={{ width: '400px' }}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <div className={css.cardDescription}>
          <h2>{original_title}</h2>
          <div>User Score: {vote_average}</div>
          <h3>Overview</h3>
          <p>{overview}</p>
          {/* <h3>Genres</h3> */}
          {/* <ul>
            {genres.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul> */}
        </div>
      </div>
      <div>Additional information</div>
      <ul>
        <li>
          <Link to={'cast'} state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={{ from: backLinkHref }}>
            Reviews
          </Link>{' '}
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
