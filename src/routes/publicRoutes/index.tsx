import LoginPage from '../../containers/SignIn';
import Register from '../../containers/Register';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';
import ProductDetail from '../../containers/ProductDetail';
import ProductSearch from '../../containers/ProductSearch';

export default [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:slug', element: <ProductDetail /> },
  { path: '/product/search/:slug', element: <ProductSearch /> },
];
