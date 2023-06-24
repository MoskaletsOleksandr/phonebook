import { authReducer } from './auth/slice';
import { contactsReducer } from './contactsSlice';

export const reducer = {
  contacts: contactsReducer,
  auth: authReducer,
};
