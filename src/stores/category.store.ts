import { action, atom } from 'nanostores';

import { Category, getCategoryByName } from '../api/category.api';

export const categoryStore = atom<Category>();

export const updateCategoryAction = action(
  categoryStore,
  'update',
  async (store, categoryName: string) => {
    store.set(await getCategoryByName(categoryName));
  },
)