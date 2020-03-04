import { combineReducers } from 'redux';
import { urlsReducer } from './urls';

const rootReducer = combineReducers({
  urls: urlsReducer,
});

export default rootReducer;
