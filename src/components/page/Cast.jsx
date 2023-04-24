import getCreditsById from 'backend/get-movieCredits';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCreditsById(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, character, profile_path, original_name }) => (
        <li key={id}>
          <img
            style={{ width: '100px' }}
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={original_name}
          />
          <div>{original_name}</div>
          <div>Character: {character}</div>
        </li>
      ))}
    </ul>
  );
}
