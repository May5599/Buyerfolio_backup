// store/index.js
import { createStore, combineReducers } from 'redux';
import formReducer from './reducers/formReducers';

const rootReducer = combineReducers({
  formData: formReducer,
});

const store = createStore(rootReducer);

export default store;
