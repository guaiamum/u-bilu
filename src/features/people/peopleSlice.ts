import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

import type { AppState } from '../../app/store'
import type { Person } from './Person'

export interface PeopleState {
  value: Person[]
  status: 'idle' | 'loading' | 'failed'
}

export const initialPeople: Person[] = [
  { id: "0ab", name: "Rodrigo" },
  { id: "1cd", name: "Cruela" },
];

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
      console.log('newPerson :>> ', newPerson);
      state.value.push(newPerson);
    },
    remove: (state, action: PayloadAction<string>) => {
      console.log('action.payload :>> ', action.payload);
      const idxOfPersonToRemove = state.value.findIndex(({ id }) => {
        return id === action.payload
      })
      state.value.splice(idxOfPersonToRemove, 1);
    },
  },
})

export const { add, remove } = peopleSlice.actions

export const selectAllPeople = (state: AppState) => state.people.value

export const selectPersonById =(state: AppState) =>  (personId) => state.people.value.find(({ id }) => id === personId)

export default peopleSlice.reducer
