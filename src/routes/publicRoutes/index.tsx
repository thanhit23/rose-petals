import NotFound from 'src/components/NotFound';
import HomePage from 'src/containers/HomePage';
import ProductDetail from 'src/containers/ProductDetail';
import ProductSearch from 'src/containers/ProductSearch';
import Register from 'src/containers/Register';
import LoginPage from 'src/containers/SignIn';

export default [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },
  { path: '/product/:slug', element: <ProductDetail /> },
  { path: '/product/search/:slug', element: <ProductSearch /> },
];
