import Cart from '../../containers/Cart';
import Order from '../../containers/Order';
import Profile from '../../containers/Profile';
import Address from '../../containers/Address';
import Payment from '../../containers/Payment';
import Checkout from '../../containers/Checkout';
import HomePage from '../../containers/HomePage';
import ProfileEdit from '../../containers/Profile/Edit';
import AddAddress from '../../containers/Address/Add';
import EditAddress from '../../containers/Address/Edit';
import OrderDetail from '../../containers/Order/Detail';
import ProductDetail from '../../containers/ProductDetail';
import SupportTicket from '../../containers/SupportTicket';
import PaymentMethod from '../../containers/PaymentMethod';
import PaymentMethodAdd from '../../containers/PaymentMethod/Add';
import PaymentMethodEdit from '../../containers/PaymentMethod/Edit';
import DetailSupportTicket from '../../containers/SupportTicket/Detail';

export default [
  { path: '/user', component: HomePage, exact: true, index: true },
  { path: '/cart', component: Cart, index: true },
  { path: '/checkout', component: Checkout, index: true },
  { path: '/product/:slug', component: ProductDetail, index: true },
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
];
