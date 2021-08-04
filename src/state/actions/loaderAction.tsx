import { LOADER_REDUCER_IS_LOADING } from './actionTypes';
export const isLoadingAction = (isLoading: Boolean) => {
  return {
    type: LOADER_REDUCER_IS_LOADING,
    payload: isLoading,
  };
};
