import LoginPage from '../../containers/Login';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';
import ProductDetailPage from '../../components/ProductDetailPage';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/product/:slug', element: <ProductDetailPage /> },
  { path: '*', element: <NotFound /> },
];
