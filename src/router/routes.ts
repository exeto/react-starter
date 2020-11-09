import { LIST, ITEM } from './ids';

const routes = [
  {
    id: LIST,
    path: '/',
  },
  {
    id: ITEM,
    path: '/posts/:id',
  },
];

export default routes;
