import { HomePage, LoginPage, NotFound, ProductDetail, ProductSearch, RegisterPage } from 'src/routes/elements';

export default [
  { path: '/', element: <HomePage /> },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/product/:slug', element: <ProductDetail /> },
  { path: '/product/search/:slug', element: <ProductSearch /> },
];
