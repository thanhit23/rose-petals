import LoginPage from '../../containers/Login';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '*', element: <NotFound /> },
];
