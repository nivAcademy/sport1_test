import { getCategoriesApi } from '../apiController/moreInfoApi';
import { Category } from '../models/categories';
export const getCategoriesRepo = async (): Promise<Category[]> => {
  const categoriesArray = await getCategoriesApi();
  //let array = [];
  categoriesArray.categories.push(
    {
      title: 'משתתפים וזוכים בפרסים ',
      id: '50281',
      is_parent_category: false,
      children: [],
    },
    {
      title: ' מגזין ספורט 1 ',
      id: '50282',
      is_parent_category: false,
      children: [],
    },
    {
      title: 'ברחבה ',
      id: '50283',
      is_parent_category: false,
      children: [],
    },
  );
  return categoriesArray.categories;
  //return array;
};
