import Authenticated from 'src/containers/Authenticated';

import authRoutes from './authRoutes';
import publicRoutes from './publicRoutes';

const publicRoute = publicRoutes.map(({ path, element, children = [] }) => ({ path, element, children }));

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
