import { CONNECTED_REDUCER_IS_CONNECTED } from './actionTypes';
const isConnectionAction = (isConnected: Boolean) => {
  return {
    type: CONNECTED_REDUCER_IS_CONNECTED,
    payload: isConnected,
  };
};

export const allErrorActions = { isConnectionAction };
