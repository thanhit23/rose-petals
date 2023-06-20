import Address from 'src/containers/Address';
import AddAddress from 'src/containers/Address/Add';
import EditAddress from 'src/containers/Address/Edit';
import Cart from 'src/containers/Cart';
import Checkout from 'src/containers/Checkout';
import HomePage from 'src/containers/HomePage';
import Order from 'src/containers/Order';
import OrderDetail from 'src/containers/Order/Detail';
import Payment from 'src/containers/Payment';
import PaymentMethod from 'src/containers/PaymentMethod';
import PaymentMethodAdd from 'src/containers/PaymentMethod/Add';
import PaymentMethodEdit from 'src/containers/PaymentMethod/Edit';
import Profile from 'src/containers/Profile';
import ProfileEdit from 'src/containers/Profile/Edit';
import SupportTicket from 'src/containers/SupportTicket';
import DetailSupportTicket from 'src/containers/SupportTicket/Detail';
import WishList from 'src/containers/WishList';

export default [
  { path: '/user', component: HomePage, exact: true, index: true },
  { path: '/cart', component: Cart, index: true },
  { path: '/checkout', component: Checkout, index: true },
  { path: '/payment', component: Payment, index: true },
  { path: '/order', component: Order, index: true },
  { path: '/order/:id', component: OrderDetail, index: true },
  { path: '/profile', component: Profile, index: true },
  { path: '/profile/:id', component: ProfileEdit, index: true },
  { path: '/address', component: Address, index: true },
  { path: '/address/add', component: AddAddress, index: true },
  { path: '/address/:id', component: EditAddress, index: true },
  { path: '/payment-methods', component: PaymentMethod, index: true },
  { path: '/payment-method/:id', component: PaymentMethodEdit, index: true },
  { path: '/payment-method/add', component: PaymentMethodAdd, index: true },
  { path: '/support-tickets', component: SupportTicket, index: true },
  { path: '/support-ticket/:id', component: DetailSupportTicket, index: true },
  { path: '/wish-list', component: WishList, index: true },
];
