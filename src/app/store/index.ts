import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { ignorePersistActionsiddleware, persistedReducer, persistStore } from './persist'

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: ignorePersistActionsiddleware
  })
}

const store = makeStore()

export const persistor = persistStore(store)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
