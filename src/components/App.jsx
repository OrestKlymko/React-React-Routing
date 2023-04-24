import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Movies from './page/Movies';
import MovieDetail from './page/MovieDetail';
import Cast from './page/Cast';
import Reviews from './page/Reviews';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
