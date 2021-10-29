import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import peopleReducer from '../features/people/peopleSlice'
import tripReducer from '../features/trip/tripSlice'

export function makeStore() {
  return configureStore({
    reducer: { people: peopleReducer, trips: tripReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
