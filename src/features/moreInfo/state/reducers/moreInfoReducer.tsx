import { Category } from '../../../../models/categories';
import {
  CATEGORIES_REDUCER_ADD_CATEGORIES,
  CATEGORIES_REDUCER_CATEGORIES_LOADED,
} from '../actions/ActionTypes';

const initialState: {
  data: Category[];
  error: string;
} = {
  data: [],
  error: '',
};

const moreInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_REDUCER_ADD_CATEGORIES:
      return {
        ...state,
      };
    case CATEGORIES_REDUCER_CATEGORIES_LOADED:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default moreInfoReducer;
