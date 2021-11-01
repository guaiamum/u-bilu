import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

/**
 * https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
 * @param getDefaultMiddleware 
 * @returns 
 */
export const ignorePersistActionsiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })

export { persistStore } from 'redux-persist';
export { PersistGate } from 'redux-persist/integration/react'