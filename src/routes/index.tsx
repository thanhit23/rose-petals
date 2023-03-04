import Authenticated from '../containers/Authenticated';
import publicRoutes from './publicRoutes';
import authRoutes from './authRoutes';

const publicRoute = publicRoutes.map(({ path, element }) => ({ path, element }));

const authRoute = authRoutes.map(({ path, index, component: Component }) => ({
  path,
  index,
  element: (
    <Authenticated>
      <Component />
    </Authenticated>
  ),
}));

const routes = () => [...publicRoute, ...authRoute];

export default routes;
