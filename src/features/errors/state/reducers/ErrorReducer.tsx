import { CONNECTED_REDUCER_IS_CONNECTED } from '../actions/actionTypes';
/*
 for now we handle only one error
 add more errors for each
*/
const initialState: {
  isConnected: boolean;
} = {
  isConnected: true,
};
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNECTED_REDUCER_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.payload,
      };

    default:
      return state;
  }
};

export default errorReducer;
