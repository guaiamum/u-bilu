import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

import type { AppState } from '../../app/store'
import type { Person } from './Person'

export interface PeopleState {
  value: Person[]
  status: 'idle' | 'loading' | 'failed'
}

export const initialPeople: Person[] = [];

const initialState: PeopleState = {
  value: initialPeople,
  status: 'idle',
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Person>) => {
      const newPerson = { ...action.payload, id: uuid() };
      state.value.push(newPerson)
    },
    remove: (state, action: PayloadAction<string>) => {
      const idxOfPersonToRemove = state.value.findIndex(({ id }) => {
        return id === action.payload
      })
      state.value.splice(idxOfPersonToRemove, 1);
    },
  },
})

export const { add, remove } = peopleSlice.actions

export const selectAllPeople = (state: AppState) => state.people.value

export const selectPersonById = (state: AppState) => (personId) => state.people.value.find(({ id }) => id === personId)

export default peopleSlice.reducer
