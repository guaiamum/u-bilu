import { combineReducers } from 'redux';
import peopleReducer from '../../features/people/peopleSlice'
import tripReducer from '../../features/trip/tripSlice'

const rootReducer = combineReducers({ people: peopleReducer, trips: tripReducer })

export default rootReducer;