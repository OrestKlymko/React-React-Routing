import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../../src/css/header.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <nav className={css.navigation}>
        <Link to={'/'} className={css.btnLink}>
          Home
        </Link>
        <Link to={'/movies'} className={css.btnLink}>
          Movies
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
