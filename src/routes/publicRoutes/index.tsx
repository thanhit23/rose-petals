import LoginPage from '../../containers/Login';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';

export default [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
];
