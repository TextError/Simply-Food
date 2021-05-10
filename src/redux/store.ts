import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer
  }
};

const middlewares = [thunk];

export const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION__() 
    : () => {}
));

export const persistor = persistStore(store);