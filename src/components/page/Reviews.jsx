import getMoviesReviews from 'backend/get-movieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getMoviesReviews(movieId).then(({ results }) => setReview(results));
  }, [movieId]);

  return (
    <ul>
      {review.map(({ author, content, id }) => (
        <li key={id}>
          <div>{author}</div>
          <div>{content}</div>
        </li>
      ))}
    </ul>
  );
}
