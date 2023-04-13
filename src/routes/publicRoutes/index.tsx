import LoginPage from '../../containers/Login';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';
import ProductSearch from '../../containers/ProductSearch';

export default [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/product/search/:slug', element: <ProductSearch /> },
];
