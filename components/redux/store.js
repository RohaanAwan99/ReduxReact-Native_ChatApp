import { legacy_createStore as createStore } from 'redux';
import ChatReducer from './reducer';

export const store = createStore(ChatReducer);