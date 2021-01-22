import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
const initialState = {};

const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['transactions'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);
export {store, persistor};
