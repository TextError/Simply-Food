import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer
	}
};

let reduxDevTools = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__
	? window.__REDUX_DEVTOOLS_EXTENSION__()
	: (a: null) => a;

if (process.env.NODE_ENV === 'production') reduxDevTools = (a: null) => a;

const middlewares = [thunk];

export const store = createStore(rootReducer, compose(
  applyMiddleware(...middlewares),
  reduxDevTools
));

export const persistor = persistStore(store);