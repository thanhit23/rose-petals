import { lazy } from 'react';

export const HomePage = lazy(() => import('src/containers/HomePage'));
export const NotFound = lazy(() => import('src/components/NotFound'));
export const ProductDetail = lazy(() => import('src/containers/ProductDetail'));
export const ProductSearch = lazy(() => import('src/containers/ProductSearch'));
export const RegisterPage = lazy(() => import('src/containers/Register'));
export const LoginPage = lazy(() => import('src/containers/SignIn'));

export const Address = lazy(() => import('src/containers/Address'));
export const AddAddress = lazy(() => import('src/containers/Address/Add'));
export const EditAddress = lazy(() => import('src/containers/Address/Edit'));
export const Cart = lazy(() => import('src/containers/Cart'));
export const Checkout = lazy(() => import('src/containers/Checkout'));
export const Order = lazy(() => import('src/containers/Order'));
export const OrderDetail = lazy(() => import('src/containers/Order/Detail'));
export const Payment = lazy(() => import('src/containers/Payment'));
export const PaymentMethod = lazy(() => import('src/containers/PaymentMethod'));
export const PaymentMethodAdd = lazy(() => import('src/containers/PaymentMethod/Add'));
export const PaymentMethodEdit = lazy(() => import('src/containers/PaymentMethod/Edit'));
export const Profile = lazy(() => import('src/containers/Profile'));
export const ProfileEdit = lazy(() => import('src/containers/Profile/Edit'));
export const SupportTicket = lazy(() => import('src/containers/SupportTicket'));
export const DetailSupportTicket = lazy(() => import('src/containers/SupportTicket'));
export const WishList = lazy(() => import('src/containers/WishList'));
