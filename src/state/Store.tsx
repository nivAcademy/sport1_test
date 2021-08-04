import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loaderReducer from './reducers/loaderReducer';
import errorReducer from '../features/errors/state/reducers/ErrorReducer';
import moreInfoReducer from '../features/moreInfo/state/reducers/moreInfoReducer';
import { combineReducers } from 'redux';

//this is include all the reducer of the whole app?
const rootReducer = combineReducers({
  loader: loaderReducer,
  error: errorReducer,
  moreInfo: moreInfoReducer,
});

// The store now has the ability to accept thunk functions in `dispatch`
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
