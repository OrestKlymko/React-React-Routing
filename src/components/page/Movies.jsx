import getMovieByName from 'backend/get-movieByName';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Movies() {
  const [collection, setCollection] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  let query = searchParams.get('query') ?? '';

  const searchByQuery = e => {
    const form = e.target;
    query = form.elements.searchQuery.value;
    e.preventDefault();
    getMovieByName(query).then(r => setCollection(r));
    query === '' ? setSearchParams({}) : setSearchParams({ query });
  };

  useEffect(() => {
    getMovieByName(query).then(r => setCollection(r));
    query === '' ? setSearchParams({}) : setSearchParams({ query });
  }, [query, setSearchParams]);

  return (
    <>
      <form onSubmit={searchByQuery}>
        <input type="text" name="searchQuery" />
        <button>Search</button>
      </form>
      <ul>
        {collection.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
