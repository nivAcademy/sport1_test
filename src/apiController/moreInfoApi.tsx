import { CategoriesRootObject } from '../models/categories';
const axios = require('axios');
export const getCategoriesApi = async (): Promise<CategoriesRootObject> => {
  const response = await axios.get(
    'https://sp1dv.maariv.co.il/wp-json/sport1/v1/navigation',
  );
  return response.data;
};
