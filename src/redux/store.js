import { configureStore } from '@reduxjs/toolkit';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authStore from './auth/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authStore.authReducer),
    // user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
const appStore = { store, persistor };
export default appStore;
