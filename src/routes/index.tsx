import { RouteObject, createBrowserRouter } from 'react-router-dom';

import NotFound from 'src/components/NotFound';
import Authenticated from 'src/containers/Authenticated';
import GeneralLayout from 'src/layouts/Main';

const routers: RouteObject[] = [
  {
    path: '/auth',
    errorElement: <NotFound />,
    children: [
      {
        path: 'login',
        lazy: () => import('src/containers/SignIn'),
      },
      {
        path: 'register',
        lazy: () => import('src/containers/Register'),
      },
    ],
  },
  {
    path: '/',
    errorElement: <NotFound />,
    element: <GeneralLayout />,
    children: [
      {
        index: true,
        lazy: () => import('src/containers/HomePage'),
      },
      {
        path: 'cart',
        element: <Authenticated />,
        children: [{ index: true, lazy: () => import('src/containers/Cart') }],
      },
      {
        path: 'checkout',
        element: <Authenticated />,
        children: [{ index: true, lazy: () => import('src/containers/Checkout') }],
      },
      {
        path: 'payment',
        element: <Authenticated />,
        children: [{ index: true, lazy: () => import('src/containers/Payment') }],
      },
      {
        path: 'product',
        children: [
          {
            path: 'search/:slug',
            lazy: () => import('src/containers/ProductSearch'),
          },
          {
            path: ':slug',
            lazy: () => import('src/containers/ProductDetail'),
          },
        ],
      },
      {
        path: 'order',
        element: <Authenticated />,
        children: [
          {
            index: true,
            lazy: () => import('src/containers/Order'),
          },
          {
            path: ':id',
            lazy: () => import('src/containers/Order/Detail'),
          },
        ],
      },
      {
        path: 'profile',
        element: <Authenticated />,
        children: [
          {
            index: true,
            lazy: () => import('src/containers/Profile'),
          },
          {
            path: ':id',
            lazy: () => import('src/containers/Profile/Edit'),
          },
        ],
      },
      {
        path: 'address',
        element: <Authenticated />,
        children: [
          {
            index: true,
            lazy: () => import('src/containers/Address'),
          },
          {
            path: 'add',
            lazy: () => import('src/containers/Address/Add'),
          },
          {
            path: ':id',
            lazy: () => import('src/containers/Address/Edit'),
          },
        ],
      },
      {
        path: 'payment-methods',
        element: <Authenticated />,
        children: [
          {
            index: true,
            lazy: () => import('src/containers/PaymentMethod'),
          },
          {
            path: ':id',
            lazy: () => import('src/containers/PaymentMethod/Edit'),
          },
          {
            path: 'add',
            lazy: () => import('src/containers/PaymentMethod/Add'),
          },
        ],
      },
      {
        path: 'wish-list',
        element: <Authenticated />,
        children: [
          {
            index: true,
            lazy: () => import('src/containers/WishList'),
          },
        ],
      },
    ],
  },
];

export default createBrowserRouter(routers);
