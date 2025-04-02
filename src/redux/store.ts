import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,

  //REDUX_DEVTOOLS in the chrome
  composeWithDevTools(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
