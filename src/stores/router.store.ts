import { createRouter } from '@nanostores/router';

interface Routes {
  home: void,
  category: 'categoryName'
}

export const router = createRouter<Routes>({
  home: '/',
  category: '/categories/:categoryName',
});
