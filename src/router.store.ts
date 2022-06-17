import { createRouter } from '@nanostores/router';

interface Routes {
  home: void,
  category: 'categoryId'
}

export const router = createRouter({
  home: '/',
  category: '/categories/:categoryId',
});
