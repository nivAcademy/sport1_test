import {
  CATEGORIES_REDUCER_ADD_CATEGORIES,
  CATEGORIES_REDUCER_CATEGORIES_LOADED,
} from './ActionTypes';

import { Category } from '../../../../models/categories';
import { getCategoriesRepo } from '../../../../repositories/moreInfoRepo';
import { AppThunk } from '../../../../state/Store';
import { isLoadingAction } from '../../../../state/actions/loaderAction';
import { allErrorActions } from '../../../errors/state/actions/errorAction';

const loadCategoriesAction = (data: Category[]) => {
  return {
    type: CATEGORIES_REDUCER_CATEGORIES_LOADED,
    payload: data,
  };
};

const addCategoryAction = (data: Category) => {
  return {
    type: CATEGORIES_REDUCER_ADD_CATEGORIES,
    payload: data,
  };
};
//..... more actions

//export all the action
export const allActions = { loadCategoriesAction, addCategoryAction };

export const fetchCategoriesAction = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const categories = await getCategoriesRepo();
      dispatch(allActions.loadCategoriesAction(categories));
    } catch (error) {
      dispatch(allErrorActions.isConnectionAction(false));
    } finally {
      dispatch(isLoadingAction(false));
    }
  };
};
