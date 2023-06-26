import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { reducer } from './reducer';

export const store = configureStore({
  reducer,
});

export const persistor = persistStore(store);
