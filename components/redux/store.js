import { legacy_createStore as createStore } from 'redux';
import ChatReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, ChatReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);