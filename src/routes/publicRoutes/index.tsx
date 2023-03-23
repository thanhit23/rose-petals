import Cart from '../../containers/Cart';
import LoginPage from '../../containers/Login';
import Payment from '../../containers/Payment';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';
import Checkout from '../../containers/Checkout';
import ProductDetail from '../../containers/ProductDetail';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/cart', element: <Cart /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/product/:slug', element: <ProductDetail /> },
  { path: '/payment', element: <Payment /> },
];
