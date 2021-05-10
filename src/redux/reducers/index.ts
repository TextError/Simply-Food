import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import number from './number';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
};

const rootReducer = combineReducers({
  number,
});


export default persistReducer(persistConfig, rootReducer);