import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import errorReducer from './reducers/errorReducer';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  errorReducer: errorReducer,
  searchReducer: searchReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
