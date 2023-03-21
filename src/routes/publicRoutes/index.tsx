import LoginPage from '../../containers/Login';
import NotFound from '../../components/NotFound';
import HomePage from '../../containers/HomePage';
import ProductDetailPage from '../../components/ProductDetailPage';
import CartPage from '../../components/Cart';
import CheckoutPage from '../../components/Checkout';

export default [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/product/:slug', element: <ProductDetailPage /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/checkout', element: <CheckoutPage /> },
  { path: '*', element: <NotFound /> },
];
