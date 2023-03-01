import Authenticated from '../containers/Authenticated';
import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';

const publicRoute = publicRoutes.map(({ path, element }) => {
  return { path, element };
});

const authRoute = authRoutes.map(({ path, index, component: Component }) => {
  // @ts-ignore
  return { path, index, element: <Authenticated children={<Component />} /> };
});

const routes = () => [...publicRoute, ...authRoute];

export default routes;
