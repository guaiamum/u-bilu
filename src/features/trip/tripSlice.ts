import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

import type { AppState } from '../../app/store'
import type { Trip } from './Trip'

export interface TripsState {
  value: Trip[]
  status: 'idle' | 'loading' | 'failed'
}

export const initialTrips: Trip[] = [
  {
    id: "1a",
    date: Date.now(),
    tripNo: 0,
    peopleIds: ["0ab"]
  },
];

const initialState: TripsState = {
  value: initialTrips,
  status: 'idle',
}

export const tripsSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Trip>) => {
      const newTrip = { ...action.payload, id: uuid() };
      state.value.push(newTrip);
    },
    remove: (state, action: PayloadAction<string>) => {
      const idxOfTripToRemove = state.value.findIndex(({ id }) => id === action.payload)
      state.value.splice(idxOfTripToRemove, 1);
    },
    removePersonFromTrip: (state, action: PayloadAction<{ tripId: string, personId: string }>) => {
      const { tripId, personId } = action.payload;

      const trip = state.value.find(({ id }) => id === tripId)
      const peopleIdxInTrip = trip.peopleIds.findIndex((id) => id === personId)
      trip.peopleIds.splice(peopleIdxInTrip, 1);
    },
    addPersonToTrip: (state, action: PayloadAction<{ tripId: string, personId: string }>) => {
      const { tripId, personId } = action.payload;

      const trip = state.value.find(({ id }) => id === tripId)
      trip.peopleIds.push(personId);
    },
  },
})

export const { add, remove, removePersonFromTrip, addPersonToTrip } = tripsSlice.actions

export const selectAllTrips = (state: AppState) => state.trips.value

export const selectTripById = (tripId: string) => (state: AppState) => state.trips.value.find(({ id }) => id === tripId)

export default tripsSlice.reducer
