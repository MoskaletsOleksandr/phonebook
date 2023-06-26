import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const reducer = {
  contacts: contactsReducer,
  auth: persistedReducer,
};
