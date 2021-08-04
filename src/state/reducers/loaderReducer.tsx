import { LOADER_REDUCER_IS_LOADING } from '../actions/actionTypes';

const initialState: {
  isLoading: Boolean;
} = {
  isLoading: true,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_REDUCER_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default loaderReducer;
